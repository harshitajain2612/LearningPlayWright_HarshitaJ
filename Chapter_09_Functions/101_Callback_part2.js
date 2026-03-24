function Promod_doing_work(worker,callback){
    console.log("started the class :PW");
    let work = worker;
        console.log("finished the class :PW");
        callback();

}

function callWife(){
console.log("call wife when done");
}

Promod_doing_work('PW Class', callWife);