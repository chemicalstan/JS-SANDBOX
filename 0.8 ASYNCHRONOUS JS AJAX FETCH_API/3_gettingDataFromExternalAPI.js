// Listen For a click of button
document.querySelector('.get-jokes').addEventListener('click', loadJoke);

function loadJoke(e){
    // get the number of jokes
    const number = document.querySelector('input[type = number]').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success'){
                jokesObj.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`;
                });
            }else{
                output += `<li>Some thing went wrong</li>`;
            }

            document.querySelector('.jokes').innerHTML = output;
            // console.log(jokes.type);
        }
    }
    xhr.send();


    // console.log(number);
    e.preventDefault();
}