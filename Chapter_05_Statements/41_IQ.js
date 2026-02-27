//Question 1 : why does if([]) evaluate to true even though the array is empty?

if([]){
    console.log("True")
}

//Answer --An Emprty array[] is an object hence it will print True as all objects are truthy in Javascript.

//Question 2:Should I use if(response) of if(response!=null) in test assertions?

//Answer --> Use if(response!=null) which catches both null and undefined, plain if (response) also fails on 0, "" , and false which might be legitimate API values.

//Question : 3 

//What is the difference btwn if(x==5) and if(x===5) in testing?

//Answer--> Always use === (sstrict equality)in the tests.== does type coercion  : "5"==5 is true but "5" ===5 is false. In QA, strict equiality catches type bugs.