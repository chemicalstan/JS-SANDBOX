// FETCHING A TEXT FILE USING THE API FETCH METHOD
document.getElementById('button1').addEventListener('click', getText);

function getText(){
    fetch('test.txt')
        .then(function (res){
            return res.text();
            })
            .then(function(data){
                document.querySelector('.output').innerHTML = data;
                // console.log(data);
                })
                .catch(function(err){
                    console.log(err);
                    });
}

// GET JSON DATA USING FETCH API METHOD
document.getElementById('button2').addEventListener('click', getJson);

function getJson(){
    fetch('users.json')
        .then(function(res){
            if (res.status === 200) {
                return res.json();
            }
        })
            .then(function(users){
                let output = '';
                users.forEach(function(user){
                    output +=   `<li>${user.name}</li>`;
                    output +=   `<li>${user.username}</li>`;
                    output +=   `<li>${user.age}</li>`;
                    output +=   `<br>`;
                });
                document.querySelector('.output').innerHTML = output;
            })
                .catch(function(err){
                    console.log(err);
                })
}

// GET EXTERNAL API DATA USING FETCH API METHOD
document.getElementById('button3').addEventListener('click', getExternal);

function getExternal(){
    fetch('https://api.github.com/users')
        .then(function(res){
            if (res.status === 200) {
                return res.json();
            }
        })
            .then(function(users){
                let output = '';
                users.forEach(function(user){
                    output +=   `<li>${user.login}</li>`;
                });
                document.querySelector('.output').innerHTML = output;
            })
                .catch(function(err){
                    document.querySelector('.output').innerHTML = `${err}, Please Check Your Internet Connection!`;
                })
}