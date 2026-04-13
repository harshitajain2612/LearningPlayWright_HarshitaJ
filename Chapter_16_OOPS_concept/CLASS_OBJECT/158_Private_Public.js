// Private Fields (#) — Hidden Data
// PUBIC Fields 
class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key; //private
    }
    // Custom made fuction by us
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);//it will print bcz its public
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

console.log(cred.pramodgetAuthHeader());

// cred.apiKey is undefined
// (it doesn't exist). 
// cred.#apiKey would throw a SyntaxError. 
// The ONLY way to access it is through the public method getAuthHeader()

