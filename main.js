const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const saveTodo = (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    li.className = "list-group-item my-2";
    li.innerHTML = input.value;

    let delbtn = document.createElement("Delete");
    delbtn.className = "btn btn-sm btn-danger rounded-0 float-end";
    delbtn.innerHTML = "Delete";
    li.appendChild(delbtn);
    ul.appendChild(li);
    form.reset();

}

const delbtnfunction = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        if (window.confirm("You are sure ??")) {
            ul.removeChild(li);
        }
    }
}

ul.addEventListener("click", delbtnfunction)
form.addEventListener("submit", saveTodo);