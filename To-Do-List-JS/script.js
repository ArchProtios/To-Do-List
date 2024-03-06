const toDoBox = document.getElementById("to-do-box")
const item = document.getElementById("item")

item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addToDo(item.value);
        // item.value = '';
    }
});


const addToDo = (items) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${items}
        <i class="fas fa-times"></i>
    `;
    
    listItem.querySelector("i").addEventListener("click", () => {
            listItem.remove()
        }
    )

    toDoBox.appendChild(listItem)
}