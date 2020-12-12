const date = document.querySelector('.date');
const input = document.querySelector('.input');
const inputBox = document.querySelector('.input-box');
const pendingItem = document.querySelector('.pending-item');
const todos = document.querySelector('.todo-container');
const completedTodos = document.querySelector('.completed-todos');
const completed = document.querySelector('.completed_btn');
const clear = document.querySelector('.clear_btn');
let todos = [];


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
//   })();


    const addButton = document.querySelector('.inputButton');
    const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        const itemBox = document.createElement('div');
        itemBox.classList.add('item');
        

        const checkbox = document.createElement('input');
        checkbox.disabled = true;
        checkbox.type = 'checkbox'; 
        checkbox.classList.add('checkbox');

        const input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        

        const removeButton = document.createElement('button');
        removeButton.innerHTML = "X";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(checkbox);
        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    
    remove(item){
        container.removeChild(item);
    }
}


function check(){
    if (input.value != ""){
        new item(input.value);
        input.value = "";
    }

}


addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})