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