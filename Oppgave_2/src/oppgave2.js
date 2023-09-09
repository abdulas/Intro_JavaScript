const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];
  console.log()
  // ---------------------------------------------------------------
  // TODO: Hent HTML #id med getElementById
  // ---------------------------------------------------------------
  let main = document.querySelector("#main");
  let nameWrapper = document.querySelector("#nameWrapper");
  let inputName = document.querySelector("#name");
  let ageWrapper = document.querySelector("#ageWrapper");
  let inputAge = document.querySelector("#age");
  let button = document.querySelector("#filter");
  let userUl = document.querySelector("#users");
  // ---------------------------------------------------------------
  // TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for 
  // å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere.
  // ---------------------------------------------------------------
  const createTableUI = (users) => {
    userUl.innerHTML = null;
    for (const user of users) {
      userUl.innerHTML += `<li><span> ${user.id} </span><span> ${user.name} </span><span> ${user.age} </span></li>`;
    }
  };
// ---------------------------------------------------------------
// Serarch handler
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// ---------------------------------------------------------------
inputName.addEventListener("keyup", handleSearch);

function handleSearch(event) {
  let inputValue = inputName.value;
  if (event.key === "Enter") {
    let searchUsers = users.filter((user) => user.name === inputValue);
    
    if (searchUsers.length === 0) {
      userUl.innerHTML = "Ingen personer oppfyller kriteriene.";
    } else {
      createTableUI(searchUsers);
    }
    
    if (inputValue.length < 3) {
      userUl.innerHTML = "Inndata må være minst 3 tegn.";
    } else if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
      userUl.innerHTML = ("Ugyldige tegn i inndata. Kun bokstaver og mellomrom er tillatt.");
    }
  }
}
// ---------------------------------------------------------------
// Filter Handler
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// ---------------------------------------------------------------
  button.addEventListener("click", handleFilter);
  function handleFilter(){
    let inputValue = inputAge.value;
    if (isNaN(inputValue)) {
        userUl.innerHTML = "Skriv inn en gyldig alder.";
      }else{
        let filteredUsers = users.filter(user => user.age > inputValue);
        if (filteredUsers.length > 0) {
            createTableUI(filteredUsers);
          } else {
            userUl.innerHTML = "Ingen personer oppfyller kriteriene.";
          }
      }
  }