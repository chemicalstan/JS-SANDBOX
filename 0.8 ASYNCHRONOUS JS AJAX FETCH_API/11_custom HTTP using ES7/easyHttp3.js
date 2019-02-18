/**
 * 
 * EasyHTTP library
 * Library For Making HTTP Requests
 * 
 * @version 3.0.0
 * @author Chemical Stan.
 * @license MIT
 * 
 */

class easyHttp{
    // make an API get request
    async get(url){
        const response = await fetch(url);
        const resData = response.json();
        return resData;
    }
    // make an http post request
    async post(url, data){
        const response = await fetch(url, {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = response.json();
        return resData;
    }
    // make an http put request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = response.json();
        return resData;

    }
    // make an http put request
    async delete(url){
        const response = await fetch(url, {
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        });

        const message = 'User Deleted Succesfully';
        return message;

    }
}