getToken()
.then(function (token){
    return getUser(token);

}).then(function (user){
    console.log(user);
});

async function run(){
    let token  = await getToknb();
     let user  = await getUser();
}