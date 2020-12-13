'use strict'
const date = document.querySelector('.date');
const todoInput = document.querySelector('.todo-input');
const addTodoButton = document.querySelector('.add-todo');
const todoContainer = document.querySelector('.todo-container');
const completedContainer = document.querySelector('.completed-container');
const todoCounterHolder = document.querySelector('.counter'); 
let todoCounter = 0;
let storageId = 1;


(function () {
    const day = new Date();
    const weekday = new Array();
    weekday[0] = "Vasárnap";
    weekday[1] = "Hétfő";
    weekday[2] = "Kedd";
    weekday[3] = "Szerda";
    weekday[4] = "Csütörtök";
    weekday[5] = "Péntek";
    weekday[6] = "Szombat";
  
    const nap = weekday[day.getDay()];
    document.querySelector(".day").textContent = nap;
  })();
  //    Ez a napra egy maibb megoldás, de és magyar nenekkel akartam megoldani
//   const day = document.querySelector('.day');
//   day.textContent = new Date().toLocaleDateString('en', { weekday: 'long' });

  //    Dátum megjelenítése
  date.textContent = new Date().toLocaleDateString('en-US').replaceAll('/', '-');

  //        Egy régebbi megoldás

//   (function () {
//       const currentDate = new Date();
//       let day = currentDate.getDate();
//       let mounth = currentDate.getMonth() + 1;
//       let year = currentDate.getFullYear();
//     document.querySelector('.date').textContent = `${day}-${mounth}-${year}`;


const counterUpdate = (direction) =>{
    if(direction){
        todoCounter += 1;
    }else {
        todoCounter -=1;
    }
    todoCounterHolder.textContent = todoCounter;
};


// Elem törlése a szülő elem megkeresésével és a remove() függvény meghívásával 
const deleteStorage = (id) => {
    document.querySelector(`[data-id ="${id}"]`).parentElement.remove();
    localStorage.removeItem(id);
    counterUpdate(false);
};
const todoCompleted = (id) => {
    let valueString = localStorage.getItem(id);
    valueString = valueString.replace('"state":1','"state":2');
    localStorage.setItem(id, valueString);
    const targetTodo = document.querySelector(`[data-setid ="${id}"]`).parentElement;
    targetTodo.remove();
    completedContainer.insertBefore(targetTodo, completedContainer.firstChild);
    counterUpdate(false);
};

const addDeleteEventListener = (id) => document.querySelector(`[data-id ="${id}"]`).addEventListener('click', () => deleteStorage(id));
const addSetEventListener = (id) => document.querySelector(`[data-setid ="${id}"]`).addEventListener('click', () => todoCompleted(id));


const createTodo = (text, id, state) => {
        let isChecked = '';
        let parentContainer = todoContainer;
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        if (parseInt(state) === 2 ) {
            parentContainer = completedContainer;
            isChecked = 'disabled checked';
        }else {
            counterUpdate(true);
        }
            
       
        todoItem.innerHTML = `<input type="checkbox" ${isChecked} name="set-complated" class=".set-complated" id="" data-setid ="${id}"> ${text} <button class ='delete-button' data-id = '${id}'>X</button>`; 
        parentContainer.insertBefore(todoItem, parentContainer.firstChild);
};

const addTodo = () => {
    if (!todoInput.value) {
        alert('Kérlek írj be egy feladatot!');
    } else {        
        createTodo(todoInput.value, storageId, 1);
        localStorage.setItem(storageId.toString(), JSON.stringify(
            {
                todo: todoInput.value,
                state: 1,  //1, ha aktív a feladat, 2, ha inaktív
            }
        ));
        addDeleteEventListener(storageId);
        addSetEventListener(storageId);
        todoInput.value = '';
        storageId += 1;
    }  
};
// Az oldal betöltésekor megnézzük a localStorage-t.
Object.keys(localStorage).forEach((key) => {
    const obj = JSON.parse(localStorage.getItem(key));

    createTodo(obj.todo, key, obj.state);
    addDeleteEventListener(key);
    addSetEventListener(key);
    if(parseInt(key) >= storageId) storageId = parseInt(key) + 1;
});

const addTodoClickListener = () => addTodoButton.addEventListener('click', addTodo);
addTodoClickListener();