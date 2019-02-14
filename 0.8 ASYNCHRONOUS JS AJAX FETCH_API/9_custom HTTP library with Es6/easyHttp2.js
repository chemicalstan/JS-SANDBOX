/**
 * 
 * EasyHTTP library
 * Library For Making HTTP Requests
 * 
 * @version 2.0.0
 * @author Chemical Stan.
 * @license MIT
 * 
 */

 class easyHttp{
    //  Make an Http get request
     get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res => res.json())
                .then(data => resolve(data))
                .catch(err=> reject(err))
        })
     }

    //  Make an HTTP Post request
    post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        });
    }

    // MAKE AN HTTP PUT/UPDATE Requests
    put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }
    // MAKE AN HTTP DELETE Requests
    delete(url){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(()=>resolve('Successfully Deleted'))
            .catch(err=>reject(err))
        })

    }
 }