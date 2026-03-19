//rest params

function logResults(suitName, ...results){
    console.log(`Suite : ${suitName}`);

     console.log(`Results : ${results.join(",")}`);
}

logResults("Auth Suite","pass","fail","pass","skip")