let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.innerText = 0;
  count = 0;
}
