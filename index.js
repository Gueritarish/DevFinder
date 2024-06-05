async function stat_update(response)
{

    const twitter_username = document.getElementById("twitter_username");
    const company_name = document.getElementById("company_name");
    const blog_link = document.getElementById("blog_link");
    const location_name = document.getElementById("location_name");
    const repos = document.getElementById("nb-repos");
    const followers = document.getElementById("nb-followers");
    const following = document.getElementById("nb-following");
    const join_date = document.getElementById("join-date");
    const bio = document.getElementById("bio-text");
    const user_img = document.getElementById("user-img");
    const name = document.getElementById("name");
    const login = document.getElementById("login");
    
    // Login
    login.innerHTML = '@' + response.login;
    
    // Name
    if (response.name !== null)
        name.innerHTML = response.name;
    
    else
        name.innerHTML = "";

    // Twitter
    if (response.twitter_username !== null)
        twitter_username.innerHTML = response.twitter_username;
    else
        twitter_username.innerHTML = "Not available"

    // Company
    if (response.company !== null)
        company_name.innerHTML = response.company;
    else
        company_name.innerHTML = "Not available"
    
    // Blog
    if (response.blog !== null && response.blog.length !== 0)
    {
        if (response.blog.startsWith("http://") || response.blog.startsWith("https://"))
            blog_link.innerHTML = `<a href=${response.blog}>${response.blog}</a>`;
        else
            blog_link.innerHTML = `<a href=${"https://"+response.blog}>${response.blog}</a>`;
    }
    else
        blog_link.innerHTML = "Not available"
    
    // Location
    if (response.location !== null)
        location_name.innerHTML = response.location;
    else
        location_name.innerHTML = "Not available"

    // Biography
    if (response.bio !== null)
        bio.innerHTML = response.bio;
    else
        bio.innerHTML = "<i>None</i>"

    // Repos
    const repos_list = await fetch(response.repos_url,{
        method: "GET"});
    const repos_json = await repos_list.json();
    repos.innerHTML = repos_json.length

    // Followers
    followers.innerHTML = response.followers;
    
    // Following
    following.innerHTML = response.following;
    
    // Profile picture
    user_img.src = response.avatar_url;

    // Creation Date
    var months = {Jan:"January", Feb:"February",Mar:"March", Apr:"April", May:"May", Jun:"June", Jul:"July", Aug:"August", Sep:"September", Oct:"October", Nov:"November", Dec:"December"};
    var date = new Date(response.created_at);
    var dateArr = date.toDateString().split(' ');
    join_date.innerHTML = dateArr[2] + ' ' + months[dateArr[1]] + ' ' + dateArr[3];
}


async function run(login)
{
    if (login.length > 0)
    {
        const response = await fetch(`https://api.github.com/users/${login}`, {
            method: "GET"
        });
        if (response.status == 200)
        {
            document.getElementById("search-error").innerHTML = "";
            const response_json = await response.json();
            await stat_update(response_json);
        }else
        {
            document.getElementById("search-error").innerHTML = "Please, provide a valid login.";
        }
        document.getElementById("search-input").value = "";
    }
}


// To look for 'Find' button pressed
const button = document.getElementById("find-btn");
button.addEventListener("click", async () => {
    const login = document.getElementById("search-input").value;
    run(login)
});

// To look for key 'Return' pressed while typing
const search_input = document.getElementById("search-input");
search_input.addEventListener("keyup", async (event) => {
    if (event.key === "Enter")
    {
        const login = document.getElementById("search-input").value;
        run(login)
    }
})