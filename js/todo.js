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
    document.getElementById("demo").innerHTML = nap;
  })();
  (function () {
      const currentDate = new Date();
      let day = currentDate.getDate();
      let mounth = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();
    document.getElementById('date').textContent = `${day}-${mounth}-${year}`;
  })();


  const addButton = document.querySelector('.inputButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "X";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
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