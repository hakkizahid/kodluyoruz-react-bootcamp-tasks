
let name1 = prompt("Lutfen Adinizi Giriniz: ");

let mName = document.querySelector("#myName");
mName.innerHTML += " " + name1;

let clck = document.querySelector("#myClock");

function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clck.innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


