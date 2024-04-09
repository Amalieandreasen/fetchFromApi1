//
// FÆLLES
//

// Vi skal anvende data herfra: https://randomuser.me/

// Læs dokumentation og find ud af hvordan man får en user (5 min eller indtil en har et svar)

// Find ud af hvordan man får 50 users (5 min eller indtil en har et svar)

// Fetch og log dem med fetch

const url = "https://randomuser.me/api/?results=20";

const usersEl = document.querySelector(".users");

fetch (url)
.then(res => res.json())
.then(data => usersList(data))
.catch(err => console.log("Der er sket en fejl",err))

// async function fetchStuff(){
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data)
// }

// fetchStuff();

// Prøv nu at kopiere og omskrive det til async/await (Mark viser hvordan)

//
// I grupperne
//

// function usersList(users){
//   console.log('users:', users)
//   users.results.forEach(user =>{
//     const newArticle = document.createElement("article");
//     const newH4 = document.createElement("h4");
//     newH4.classList.add("title");
//     const newImg = document.createElement("img");
//     newH4.textContent = user.name.first +" "+ user.name.last;
//     newImg.src = user.picture.large;
//     newArticle.append(newH4,newImg)

// usersEl.append(newArticle);
//   })
// }
function usersList(users) {
  const usersEl = document.querySelector('.users'); // Elementet, hvor brugerne skal tilføjes
 
  let html = ''; // Variabel til at samle HTML-strengen
 
  users.results.forEach(user => {
    html += `
<article class="version2">
<h4 class="title">${user.name.first} ${user.name.last}</h4>
<p class="cityCountry">
          <i class="fa-solid fa-city"></i>${user.city} <span>${user.country}</span>
        </p>
        <p class="adresss">
          <i class="fa-regular fa-address-card"></i>GADENAVN HUSNUMMER
        </p>
        <p class="email">
          <i class="fa-regular fa-envelope"></i>EMAIL@email.email
        </p>
        <p class="age"><i class="fa-solid fa-person"></i>59</p>
<img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
</article>
    `;
  });
 
  usersEl.innerHTML = html; // Indsæt den genererede HTML i elementet
}

// Prøv nu at anvende document.createElement(), .classlist.add(), .textContent og append() til at skabe en artikel med følgende struktur per user i results og append i .result:
{
  /* <article>
  <h4 class="title">NAVN</h4>
  <img src="URL" alt="ALT" />
</article>; */
}

// Prøv nu at udkommentere ovenfor og anvend istedet .innerHTML med strukturen fra index.html. Igen en per bruger i results

//
// FÆLLES
//

// Hvis vi kan nå det: implementér filtrering i form af en input[type="search"]

//fang input
const inputEl = document.querySelector("input");

//lyt efter change event
//find den værdi der er i input feltet

inputEl.addEventListener("change", e => {
  console.log("My event happened")
})
