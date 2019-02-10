// DEFAULT CONSTRUCTOR
function easyHttp(){
    this.http = new XMLHttpRequest();
}

// MAKE A GET REQUEST
easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function (){
        if(self.http.status === 200){
                    //no error, responseText
            callback(null, self.http.responseText);
        }else{
                    // error, no responseText
            callback(self.http.status, null);
        }
    }

    this.http.send();
}


// MAKE A POST REQUEST
easyHttp.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    // Set Request Header and content type
    this.http.setRequestHeader('content-type', 'application/json');
    // Capturing the scope
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


// MAKE A PUT REQUEST
easyHttp.prototype.put = function (url, data, callback){
    this.http.open('PUT', url, true);
    // set Content type and Request Header
    this.http.setRequestHeader('content-type', 'application/json');
    // Capture the scope
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}
// MAKE A DELETE REQUEST
easyHttp.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    // capture the scope
    let self = this;
    this.http.onload = function(){
        if (self.http.status === 200) {
            callback(null, 'Post Deleted');
        }else{
            callback(`Error: ${self.http.status}`);
        }
    }
    this.http.send();
}