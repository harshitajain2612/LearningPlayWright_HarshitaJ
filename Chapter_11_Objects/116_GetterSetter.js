const user = {

    firstName : "Pramod",
    lastName : "Dutta",
    get fullName(){
        return this.firstName + this.lastName;
    },
    set fullName(value){
       [this.firstName + this.lastName] = value.split (" ");
    }

};
//the above one is not the correct format of using class so we will use type script
console.log(user.fullName);

user.fullName = "Kimi Jain"

console.log(user.fullName);