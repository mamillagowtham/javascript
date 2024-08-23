async is indicate that there a promise inside a function;


If you want give manually resolve or reject 
then give below methods
1.Promise.resolve
2.Promise.reject

example;
async function something()
{
    return Promise.resolve(20);
    return Promise.reject("error message"); //give seperatly;
}

something()
.then((result)=>alert(result))
.then((error)=>alert(error))
