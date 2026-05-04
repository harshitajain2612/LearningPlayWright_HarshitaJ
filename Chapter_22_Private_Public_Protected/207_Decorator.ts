function Role(role :string){
    return function (constructor :Function){
        constructor.prototype.role = role;
    };
}

@Role("admin")  //Role is a decorator which is attached to the class Admin
class Admin {


}

const admin = new Admin ();
console.log((admin as any).role);

//admin
