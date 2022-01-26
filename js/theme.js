var tru
var element = document.body;
var def = document.getElementById("style-default");
var dark = document.getElementById("style-dark");


window.onload = function() {
    console.log(readDarkMode())
    if(readDarkMode() == 'true') 
        tru = true;
    else 
        tru = false
    
    blackWhite()
};


function blackWhite() {
    if (tru) {
        try {
            //document.querySelector(".kulbtn").style.transform = "rotate(180deg)";
            document.getElementById("bkground").src = '/assets/MIT_dark.jpg';
        } catch {}
        def.disabled = "disabled";
        dark.disabled = undefined;
        createDarkMode(true)
        tru = false
    } else {
        try {
            //document.querySelector(".kulbtn").style.transform = "rotate(0)";
            document.getElementById("bkground").src = '/assets/MIT_light.jpg';
        } catch {}
        def.disabled = undefined;
        dark.disabled = "disabled";
        createDarkMode(false)
        tru = true
    }
}

//Cookies 

function createDarkMode(bool) {
    console.log(`Created - darkMode Cookie: ${bool}`)
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));//1month
    let expires = "expires="+ d.toUTCString();
    document.cookie = 'darkMode' + "=" + bool + ";" + expires + ";path=/";
}

function readDarkMode() {
    let name = 'darkMode' + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}