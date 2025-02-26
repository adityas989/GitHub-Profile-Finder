const card = document.querySelectorAll('.card');
console.log(card);
const myProfile = document.querySelector(".myprofile");
console.log(card[0]);


const user = "adityas989"
let data;
const profile = async ()=> (
    await fetch(`https://api.github.com/users/${user}`)
    .then(async(res) => {
        return res.json();
    })
    .then(d => {
        console.log(d)
        data =d
        return d;
    })
)

const displayMyProfile = async () => {
    const p = await profile();
    console.log(p);

    
    // console.log(myProfile)
    myProfile.innerHTML = `

        <h1 > ${data.name} </h1>
        <h2 class="txt"> My Public Repos: </h>
        <h2> ${data.public_repos}</h2>
        <h2 class="txt"> My Repo Link: </h2>
        <h2> ${data.repos_url} </h2>
        <img class="myProPic" src="${data.avatar_url}" alt='${data.name}' >
    `
}
displayMyProfile();

let t;
const topProfiles =async () => {
    await fetch('https://api.github.com/search/users?q=followers:>1000&sort=followers&order=desc')
    .then(response => response.json())
    .then(data => {
    //   console.log(data.items);
      t = data;
      return data;
    })
    .catch(error => console.error('Error fetching data:', error));
}
// topProfiles()


const addTopProfiles = async () => {
    await topProfiles();
    console.log(t.items[0])
    for (let i=0;i<3;i++){
        console.log(card[i])
        console.log(t.items[i])
        card[i].innerHTML = `
        <div>
            <img src=${t.items[i].avatar_url} alt="profile pic">
        </div>
        <h1> ${t.items[i].login} </h1>
        `
    }
}
addTopProfiles();