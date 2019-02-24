// Github HTTP request class
class Github{
    constructor (){
        this.client_id = 'c8789a01aa960f5224a3';
        this.client_secrete = 'b309b3afe7afd0c9f7cf33b511c28d9eeb901657';
        this.repos_count = 5;
        this.repos_sort = 'created_at: asc';
    }
    async getUser(user){
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&&client_secrete=${this.client_secrete}`);
        const profileData = await profileRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&&sort=${this.repos_sort}&&client_id=${this.client_id}&&client_secrete=${this.client_secrete}`);
        const reposData = await reposRes.json();
        return {
            profile: profileData,
            repos: reposData
        };
    }
}