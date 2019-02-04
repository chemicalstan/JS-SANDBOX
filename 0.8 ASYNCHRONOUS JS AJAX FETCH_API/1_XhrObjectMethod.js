// Event Listener
document.getElementById('button').addEventListener('click', loadData);

// Call back function
function loadData(){
    //  new xhr instance
    const xhr = new XMLHttpRequest();

    // Open xhr method
        // Here, the type of request is specified, the file to be fetched and the status [if asynchronous or not]
    xhr.open('GET', 'data.txt', true);

    // xhr.onload = function (){
    //     if (this.status === 200) {
    //         console.log(this.responseText);
    //     }
    // }

    // Ready state:: This is an alternative to onload [OBSOLATE]
    xhr.onreadystatechange = function (){
        if (this.status === 200 && this.readyState === 4) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }

        // console.log(this.readyState, this.status, this.responseText)
    }

    xhr.onerror = function (){
        console.log("Request Error");
    }

    // READY STATE VALUES AND THEIR MEANING
        // 0 = Request not initialized
        // 1 = Server connection established
        // 2 = Request recieved
        // 3 = Processing request
        // 4 = Request finished and response is ready

    // This finalizes the whole thing
    xhr.send();


    // HTTP Request Statuses
    // 200 = OK
    // 403 = FORBIDDEN
    // 404 = NOT FOUND





}  // LoadData End