/* console.log("It's Working"); */

/* 
 Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
 
 (trovate l’array del team all’interno della cartella in allegato)

 **Bonus**
 
 - Rendere l’esercizio responsive, mandando a capo le card
 - Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
 
 */
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Analisi:

// Ho già l'array teamMembers con 6 oggetti, ognuno ha: name, role, email, img

//Selezioniamo il contenitore della pagina dove mettere le card
const container = document.getElementById('team-container');
// Cre un ciclo su tutti i membri dell'array teamMebers
for (let i = 0; i < teamMembers.length; i++) {
  //Salvo in una variabile l'oggeto corrente(cioè il membro del team)
  const currentMember = teamMembers[i];
  const {name, role, email, img} = currentMember
 // console.log(name,role,email, img);
// Qui creiamo una una variabile che crerà Div nel documento html
  const newDiv = document.createElement("div")
  

  //Con questo nuovo oggetto possiamo inserire il cio che vogliamo nel Div
  newDiv.innerHTML = `
      <div class="container">
                  <div id="team-container" class="row row-col-1 row-cols-md-3 g-4">
                      <div class="col">
                          <img class="card-img-top" src="${img}" alt="${name}">
                          <div class="card-body">
                              <h3>${name}</h3>
                              <div>${role}</div>
                              <div>${email}</div>
                          </div>
                      </div>
                  </div>
              </div>
    
  `
container.append(newDiv);
  
};




  


