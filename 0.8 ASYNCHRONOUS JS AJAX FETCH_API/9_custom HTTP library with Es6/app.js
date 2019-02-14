const http = new easyHttp();

// FETCH USERS
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data=>console.log(data))
//         .catch(err=> console.log(err));

// CREATE NEW DATA
const data = {
    name: 'Nicolo Zaniolo',
    username: 'nicozaniolo',
    age: 19
}

// // MAKE NEW USER
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data=>console.log(data))
//         .catch(err=>console.log(err))


// // UPDATE A USER
//     http.put('https://jsonplaceholder.typicode.com/users/3', data)
//         .then(data => console.log(data))
//             .catch(err => console.log(err));

// DELETE A USER
    http.delete('https://jsonplaceholder.typicode.com/users/2')
        .then(message=>console.log(message))
            .catch(err=>console.log(err));

