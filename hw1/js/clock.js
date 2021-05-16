
let name1 = prompt("Lutfen Adinizi Giriniz: ");

let mName = document.querySelector("#myName");
mName.innerHTML += " " + name1;

let clck = document.querySelector("#myClock");

function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();
    var day;
    switch (d){
        case 0:
            day = "Pazartesi";
        case 1:
            day = "Salı";
        case 2:
            day = "Çarşamba";
        case 3:
            day = "Perşembe";
        case 4:
            day = "Cuma";
        case 5:
            day = "Cumartesi";
        case 6:
            day = "Pazar";
    }
        

    m = checkTime(m);
    s = checkTime(s);
    clck.innerHTML =
    h + ":" + m + ":" + s + " " + day;
    var t = setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


