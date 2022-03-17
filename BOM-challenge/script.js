function creatTask(taskName) {
  let divTask = document.createElement('div');
  let title = document.createElement('h2');
  title.innerHTML = taskName;
  divTask.append(title);
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn delete';
  deleteBtn.innerHTML = 'Delete';
  divTask.append(deleteBtn);
  tasks.append(divTask);
}

// save to storage
function saveToStorage() {
  window.localStorage.setItem('tasks', JSON.stringify(tasksList));
}

function needToDelete() {
  document.querySelectorAll('.delete').forEach((elm) => {
    elm.addEventListener('click', () => {
      let taskNeedToDelete = elm.previousElementSibling.innerHTML;
      //delete from storage
      for (let i = 0; i < tasksList.length; i++) {
        if (tasksList[i].title === taskNeedToDelete) {
          tasksList.splice(i, 1);
          saveToStorage();
          break;
        }
      }
      elm.parentElement.remove();
    });
  });
}
// get all fields and buttons
let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let tasks = document.querySelector('.tasks');

let tasksList = [];
const taskStorage = window.localStorage.getItem('tasks');
// check if storage has tasks or not
if (taskStorage !== null) {
  tasksList = JSON.parse(taskStorage);
  tasksList.forEach((element) => creatTask(element.title));
  needToDelete();
}
// to creat task
btn.onclick = function () {
  // check if valid input
  if (input.value !== '') {
    creatTask(input.value);
    const taskObj = {
      title: input.value,
      id: Math.floor(Math.random() * 100000),
    };
    tasksList.push(taskObj);
    saveToStorage();
    input.value = '';
    input.focus();
  } else {
    alert('Enter Your Task..!');
  }
  input.focus();
  needToDelete();
};
