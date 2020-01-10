/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";//take out line
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";//take out line
  }
  
  //if(localStorage.getItem("name") == null){
    //ask for user's information i.e. Name
    //here we will use javascript built in function called Prompt to collect the user's name
    //var usersname = prompt("Please provide your name");
    
    //store the user's name in the storage
    //localStorage.setItem("name","username");
  //}else {//
    //alert the user's name
    //alert(localStorage.getItem("name"))//
  //}
  