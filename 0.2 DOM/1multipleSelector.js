// JAVASCRIPT MULTIPLE SELECTOR
// document.getElementsByClassName query selector method

// const items = document.getElementsByClassName('collection-item');
// // console.log(items[0].style.color = 'red');

// // Fetching a more specific class
// const itemLists = document.querySelector('ul').getElementsByClassName('collection-item');
// // console.log(itemLists);

// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// lis[2].textContent = 'Hello World';
// lis[2].style.color = '#ccc';

// // Convert HTML collection to Array
// lis = Array.from(lis);
// lis = lis.reverse();

// lis.forEach(function(li, index){
//     // console.log(li.className);
//     li.textContent = `${index}: Hello World`;
// });

// console.log(lis);


// document.querySelectorAll()
    // this fetches multiple node lists instead of
    // elements 
         // The difference between node lists and ordinary
    // elements is that node list can perform some Array
    // methods and properties

    let lists = document.querySelectorAll('li.collection-item');

    lists.forEach(function(list, index){
        list.textContent = `Hello`;
    });

    liOd = document.querySelectorAll('li:nth-child(odd)');

    liOd.forEach(function(li){
        li.style.background = '#ccc';
    });

    liEv = document.querySelectorAll('li:nth-child(even)');
    
    for(let i=0; i<liEv.length; i++){
        liEv[i].style.background = 'yellow';
    }
