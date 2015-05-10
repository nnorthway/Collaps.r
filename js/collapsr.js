function menuClose() {//collapses the navigation menu
    document.getElementById("toggle").setAttribute("onClick","menuOpen()");
        //changes the button's function from Close Menu () to open menu()
    document.getElementById("menu").setAttribute("class","closed");
        //changes the class of the nav and therefore hides the menu! Violia!
}
function menuOpen() {//shows the navigation menu
    document.getElementById("toggle").setAttribute("onClick","menuClose()");
        //Changes the button's function from openMenu() to closeMenu()
    document.getElementById("menu").setAttribute("class","open");
        //changes the class of the nav and therefore shows the menu! Violia!
}