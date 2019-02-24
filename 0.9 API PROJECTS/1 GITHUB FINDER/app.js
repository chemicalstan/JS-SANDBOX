// Initialize github object
const github = new Github();
// Initialize ui object
const ui = new UI();

// Get input field element
const searchUser = document.getElementById('searchUser');

// Listen for keyup
searchUser.addEventListener('keyup', (e)=>{
    // get user from ui
    const userText = e.target.value;
    // Validate User input
    if(userText !== ''){
        // fetch user from github
        github.getUser(userText)
            .then(data=>{
                if(data.profile.message ==='Not Found'){
                    // Show alert
                    ui.showAlert(`User ${data.profile.message}`, 'alert alert-danger');
                }else{
                    // Display User profile
                    ui.showProfile(data.profile);
                    // Display User repos
                    ui.showRepos(data.repos);
                }
            }) //.then End

    }else{
        //Clear Profile
        ui.clearProfile();
    }
    

});