// async function sayHello(){

//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve('Hello')}, 1000);
//     })

//     const error = false;
//     if(!error){
//         const res = await promise // Wait till the promise is resolved
//         return res;
//     }else{
//         await Promise.reject( new Error('Something went wrong, try again!'));
//     }
    
// }

// sayHello()
// .then(oga=>console.log(oga))
// .catch(err=>console.log(err))

async function getUsers(url){
    // Await response of the fetch call
    const response = await fetch(url);
    // Only proceed once it's resolved
    const data = response.json();
    // Only proceed once the second promise is resolved
    return data;
}

getUsers('7_Fetch API /users.json')
    .then((users)=>{users.forEach((user)=>console.log(user.name))})