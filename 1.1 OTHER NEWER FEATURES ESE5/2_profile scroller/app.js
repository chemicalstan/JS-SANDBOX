// Users
const data = [
    {
        name: "Promise Prince",
        gender: 'male',
        age: '23',
        lookingFor: 'female',
        location: 'Manchester, England',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: "Rejoice Alex",
        gender: 'female',
        age: '19',
        lookingFor: 'male',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Stanley Ebuka',
        gender: 'male',
        age: '21',
        lookingFor: 'Female',
        location: 'Otario, Canada',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: "Angela Jake",
        gender: 'female',
        age: '21',
        lookingFor: 'male',
        location: 'Berlin, Germany',
        image: 'https://randomuser.me/api/portraits/women/21.jpg'
    }
];

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next:()=>{
            return nextIndex < profiles.length ? 
            {value:profiles[nextIndex++], done:false} :
            {done: true};
        }
    }
}

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

// call first person - automatically load first person
nextProfile();
// next profile function
function nextProfile(){
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        
        document.getElementById('profileDisplay').innerHTML = `
        <ul class='list-group'>
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        <ul/>
        `;
        
        document.getElementById('imageDisplay').innerHTML = `
        <img src='${currentProfile.image}'>
        `;
    }else{
        // No more Profile
        window.location.reload();
    }
}

// console.log(profiles.next().value.name)