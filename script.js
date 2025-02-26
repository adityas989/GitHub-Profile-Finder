const card = document.querySelectorAll('.card');
console.log(card);
const myProfile = document.querySelector(".myprofile");
// const para = document.createElement("p");
// para.textContent = "Aditya Singh";
// card[3].appendChild(para);
// console.log(card[3])


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

    
    console.log(myProfile)
    // myProfile.textContent = "Aditya singh"
    // const para = document.createElement("p");
    // para.textContent = "Aditya Singh";
    // myProfile.appendChild(para);
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
