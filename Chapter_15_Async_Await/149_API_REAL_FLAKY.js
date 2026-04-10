//Flaky test - > 100 tcs , 3 failed, I want to rerun them, these are flaky, it sometimes pass and sometimes fails

let attempt = 0;
 function flakyAPI(){
    attempt++;
    if(attempt < 3){
        return Promise.reject ("Attempt" + attempt + " :failed");

    }
    return Promise.resolve ("Attempt" + attempt + " :success");
 }

 async function retryTesting(maxRetries){
    for (let i =1; i <=  maxRetries ; i++){
        try {
            let result = await flakyAPI();
            console.log(result);
            return; //or we can use break instead of return.
            //break; //u will never get out of the loop if u dont use break
        }
        catch (error){
            console.log(error);
        }
    }
 }

 retryTesting(5);

//Attempt1 :failed
//Attempt2 :failed
//Attempt3 :success
