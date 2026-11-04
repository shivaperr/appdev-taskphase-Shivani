// Find the elements we need once, at the top.
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const counter = document.querySelector("#counter");
const emptyMessage = document.querySelector("#empty-message");

// The data: one object per task.
let tasks = [];
let nextId = 1;

// DOM line for the counter + empty message.
// Call this every time the data changes, because the screen
// doesn't update just because the array did.
function updateCounter() {
  const remaining = tasks.filter(function (task) {
    return !task.done;
  }).length;

  if (tasks.length > 0 && remaining === 0) {
    counter.textContent = "All tasks done!";
  } else if (remaining === 1) {
    counter.textContent = "1 task left";
  } else {
    counter.textContent = remaining + " tasks left";
  }

  emptyMessage.hidden = tasks.length > 0;
}

// ADD: create a new <li> and attach it to the <ul>.
function addTask(text) {
  const task = { id: nextId, text: text, done: false };
  nextId++;
  tasks.push(task); // 1. update the data

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", "Mark complete: " + text);

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text; // textContent keeps user text from being read as HTML

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // TICK: update data, update the task on screen, update the counter.
  checkbox.addEventListener("change", function () {
    task.done = checkbox.checked; // 1. data
    li.classList.toggle("completed", task.done); // 2. task on screen
    updateCounter(); // 3. counter on screen
  });

  // DELETE: remove from the data, remove the <li>, update the counter.
  deleteBtn.addEventListener("click", function () {
    tasks = tasks.filter(function (t) {
      return t.id !== task.id;
    });
    li.remove();
    updateCounter();
  });

  li.append(checkbox, span, deleteBtn);
  list.appendChild(li); // 2. task on screen
  updateCounter(); // 3. counter on screen
}

// The form's submit event fires on the Add button click AND on Enter.
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  const text = input.value.trim();
  if (text === "") {
    input.focus();
    return;
  }
  addTask(text);
  input.value = "";
  input.focus();
});

// Show the correct starting state.
updateCounter();
