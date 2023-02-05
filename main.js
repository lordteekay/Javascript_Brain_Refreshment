let sum = 0;
let num = 1;
const count = document.getElementById("count");

const increment = document.getElementById("add")
increment.addEventListener("click", () => {
    sum += num;
    count.innerText = sum;
})
const entry = document.querySelector("#entry");

const save = document.getElementById("save")
save.addEventListener("click", () => {
    entry.textContent += " - " + count.innerText;
    sum = 0;
    count.textContent = sum;
})
const decrement = document.getElementById("decrement")
decrement.addEventListener("click", () => {
    sum -= num;
    count.innerText = sum;
})