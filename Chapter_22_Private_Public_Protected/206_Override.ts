class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
      override home(): void {
        console.log("3BHK");
    }
}

//2BHK

let pramod = new Pramod();
pramod.home();

//3BHK