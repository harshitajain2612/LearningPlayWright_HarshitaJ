//inheritance in javascript

class BasePage{
    constructor(pageName){
        this.pageName = pageName;
    }
    open(){
        console.log("opening the page : " + this.pageName);
    }
    close(){
        console.log("closing the page : " + this.pageName);
    }
}

class loginTest extends BasePage{
     constructor(){
       super("Login Page !");// calling parent constructor
    }
}

let page = new loginTest();

page.open();

page.close();

//opening the page : Login Page !
//closing the page : Login Page !

//loginTest never defined open() and close() - it got them from BasePage() and thats called as inheritance