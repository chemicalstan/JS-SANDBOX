// new instance of EasyHttp object
const http = new easyHttp();

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', result);

//     // callback function
// function result(error, posts){
//     if(error){
//         console.log(error);
//     }else{
//     console.log(posts);
//     }
// }

// Get Ssingle Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post){
//     if (error) {
//         console.log(error)
//     }else{
//         console.log(post);
//     }
// });

// Create data
const data = {
    title:'post one',
    body:'This is the first post'
}
// Create new post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(post);
//     }
// });


// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post){
//     if (error) {
//         console.log(erorr);
//     }else{
//         console.log(post);
//     }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if (error) {
        console.log(error);
    }else{
        console.log(response);
    }
});