class Github{
    constructor(){
        this.client_id="e5204fecc062e401dbf7"
        this.client_secret="bd4bed29c1ef6ad830290bb5955997c63f726bfa"
        this.repos_count=10;
        this.repos_sort="created:asc"
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}