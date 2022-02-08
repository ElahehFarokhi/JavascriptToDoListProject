let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#add-form input");
let searchInput = document.querySelector("#search-form input");
let addButton = document.querySelector("#add-form button");


list.addEventListener("click",(e)=>
{
    if (e.target.nodeName == "SPAN" && e.target.className == "delete-btn") {
        e.target.parentNode.remove();
        if (list.children.length == 0) {
            let emptyList = document.createElement("div");
            emptyList.style.textAlign = "center";
            emptyList.style.color = "#333"
            emptyList.innerText = "Your list is empty";
            emptyList.id = "emptyMessage";
            list.appendChild(emptyList);
        }
    }
}
)

addButton.addEventListener("click",(e)=>
{
    e.preventDefault();
    if (!addInput.value) {
        return;
    }
    if (document.querySelector("#emptyMessage")) {
        document.querySelector("#emptyMessage").remove();
    }

    list.appendChild(createListItem(addInput.value));
    addInput.value = "";
})

function createListItem(value)
{
    let item = document.createElement("li");
    let title = document.createElement("span");
    let btn = document.createElement("span");
    item.className = "to-do-item";
    title.className = "title";
    title.innerText = value;
    btn.className = "delete-btn";
    btn.innerText = "delete";
    item.appendChild(title);
    item.appendChild(btn);
    return item;
}


searchInput.addEventListener("input",(e)=>{
    if (document.querySelector("#emptyMessage")) {
        return;
    }
    Array.from(list.children).forEach(element =>{
        if (element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "flex";
        }
        else{
            element.style.display = "none";
        }
    })
})