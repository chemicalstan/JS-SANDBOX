// Promises are alternatives to callback function
const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];
function createPost(post){
    // Instatiat a new promise
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Something went wrong');
            }
        }, 2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);
}

createPost({title:'The new Post', body:'This is the new post'}).then(getPosts)
.catch((err) => {
    console.log(err);
});
