// create ui class
class UI{
    constructor (){
        this.profile = document.getElementById('profile');
    }

    // Display Profile
    showProfile(user){
        // console.log(user.company);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-3" target="_blank">View Profile</a> 
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span> 
                    <span class="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
                    <span class="badge badge-info mb-1">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>     
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show user Repositories
    showRepos(repos){
        let output = '';
        repos.forEach((repo)=>{
            output += `
                <div class='card card-body mb-2'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                        </div>
                        <div class='col-md-6'>
                            <span class="badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span> 
                            <span class="badge badge-secondary mb-1">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success mb-1">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output the repository
        document.getElementById('repos').innerHTML = output;

    }

    // Clear Profile
    clearProfile(){
        this.profile.innerHTML = "";
    }

    // Display Alert Message
    async showAlert(msg, classes){
        // Check if error div already exists
        await this.clearAlert();
            // create Error div
            const errorDiv = document.createElement('div');
            // add class to Error div
            errorDiv.className = classes;
            // Append Error message to Error div
            errorDiv.appendChild(document.createTextNode(msg));
            // Get Parent Element
            const card = document.querySelector('.card');
            // Get sibling
            const heading = document.querySelector('h1');
            //Append Error div inbetween elements
            card.insertBefore(errorDiv, heading);
            // Clear Message
            setTimeout(() => {
                this.clearAlert();
            }, 2000);

    }

    clearAlert(){
        const errorDiv = document.querySelector('.alert');
        if(errorDiv){
            errorDiv.remove();
        }
    }
}