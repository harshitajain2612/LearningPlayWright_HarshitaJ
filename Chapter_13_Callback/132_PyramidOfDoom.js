function step1(callback){
    console.log("Click Button")
}

function step2(callback){
    console.log("Click Button")
}

function step3(callback){
    console.log("Click Button")
}

function step4(callback){
    console.log("Click Button")
}

step1(function(){
    step2(function(){
        step3(function(){
            step4(function(){
                console.log("Done")
            })
        })
    })
})

//that why we learn about the PROMISES