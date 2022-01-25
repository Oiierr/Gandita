var tru = true

function blackWhite() {
    console.log('Clicked: ' + tru)
    if(tru) {
        document.querySelector(".kulbtn").style.transform = "rotate(180deg)";
        document.getElementById("bkground").src = '/assets/MIT_dark.jpg';
        tru = false
    } else {
        document.querySelector(".kulbtn").style.transform = "rotate(0)";
        document.getElementById("bkground").src = '/assets/MIT_light.jpg';
        tru = true
    }
    var element = document.body;
    element.classList.toggle("dark-mode");
}