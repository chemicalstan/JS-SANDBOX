
// Event bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// EVENT DELEGATION
    // without Event Delegation
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

    // With Event Delegation
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    if (e.target.parentElement.classList.contains('delete-item')) {
        confirm('Are you sure you want to delete')?e.target.parentElement.parentElement.remove():console.log('Canceled');
    }
    // console.log(e.target);
}