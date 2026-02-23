let isLoggedIn= true;

let userRole = "editor";

//app.vwo.com --> viewer, editor or admin
//viewer - only limited access
//editor - can edit and view
//admin -- can do all the things

if(isLoggedIn){

if (userRole ==="admin"){
    console.log("admin can do all the changes")
}
else if (userRole === "editor"){
console.log("Welcome editor - edit access granted")
}

else if (userRole === "viewer"){
console.log("Welcome Viewer - only view access granted")
}
else{
    console.log("You are not logged in")
}
}