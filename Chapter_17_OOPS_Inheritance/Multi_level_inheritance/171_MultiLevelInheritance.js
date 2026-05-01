//BasePage --> AuthPage --> AdminPage

class BasePage{
    constructor(name){
        this.name = name;
    }

    open(){
        console.log("[OPEN]" + this.name)
    }
}

class AuthPage extends BasePage{
    login(user){
         console.log("[LOGIN]" + user)
    }
}

class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }

    manageUsers(){
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();


admin.open();
admin.login("superadmin");
admin.manageUsers();

let auth = new AuthPage();
auth.manageUsers(); // wont work bcz parent can not call or access child methods