let added_task = document.querySelector("#input");
let cont = document.querySelector(".container");

const add = () => {
    if (added_task.value === '') {
        alert("Enter Something");
    } else {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${added_task.value} <i class="fa-solid fa-trash" ></i >`;
        cont.appendChild(newElement);
        newElement.querySelector('i').addEventListener('click', () => {
            newElement.remove();
        })
    }
    added_task.value = '';
}