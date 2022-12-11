let win = document.getElementsByClassName("win")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let right=document.getElementsByClassName("right")[0]
let clicked=document.getElementsByClassName("clicked")[0]
let searchclick=document.getElementsByClassName("searchclick")[0]
let searched=document.getElementsByClassName("searched")[0]
let doub=document.getElementsByClassName("doub")[0]
let doubl=document.getElementsByClassName("doubl")[0]

window.onload=function()
{
    var mobile=(/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Visit this site on a Computer for better view");
    } else {
        
    }
}

//for Windows Logo
win.addEventListener("click", ()=>{
    console.log("windows");
    if(startmenu.style.bottom == "55px"){
        startmenu.style.bottom = "-660px"
    }
    else{
        startmenu.style.bottom = "55px"
    }
})
win.addEventListener("click", ()=>{
    console.log("windowsclicked");
    if(searchclick.style.bottom == "55px"||doub.style.bottom == "55px"){
        searchclick.style.bottom = "-660px"
        doub.style.bottom = "-660px"
    }
})

//for right taskbar
right.addEventListener("click", ()=>{
    console.log("right");
    if(clicked.style.bottom == "55px"){
        clicked.style.bottom = "-660px"
    }
    else{
        clicked.style.bottom = "55px"
    }
})

//for searchbar
searched.addEventListener("click", ()=>{
    console.log("search");
    if(searchclick.style.bottom == "55px"){
        searchclick.style.bottom = "-660px"
    }
    else{
        searchclick.style.bottom = "55px"
    }
})
searched.addEventListener("click", ()=>{
    console.log("searchclicked");
    if(startmenu.style.bottom == "55px"||doub.style.bottom=="55px"){
        startmenu.style.bottom = "-660px"
        doub.style.bottom = "-660px"
    }
})

doubl.addEventListener("click", ()=>{
    console.log("double");
    if(doub.style.bottom == "55px"){
        doub.style.bottom = "-660px"
    }
    else{
        doub.style.bottom = "55px"
    }
})
doubl.addEventListener("click", ()=>{
    console.log("doubleclicked");
    if(startmenu.style.bottom == "55px"|| searchclick.style.bottom == "55px"){
        startmenu.style.bottom = "-660px"
        searchclick.style.bottom="-660px"
    }
})
