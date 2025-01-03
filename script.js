var menuBtn =  document.getElementById("menuBtn");
var sideNav =  document.getElementById("sideNav");
//the style of the sideNave is at the right of -250px
sideNav.style.left = "-300px";
//add menuBtn as a variable for onlick
//If condition: If the sideNav right is -250px, it will change it to 0. Otherwise, it is -250px
menuBtn.onclick = function(){
    if(sideNav.style.left == "-300px"){
        sideNav.style.left = "0";
    }
    else{
        sideNav.style.left = "-300px"; 
    }
}