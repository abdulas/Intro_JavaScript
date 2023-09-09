//Oppgave 1
const removeBtnFunction = () => {
  let removeBtn = document.querySelector("#remove-btn");
  removeBtn.addEventListener("click", removeTekst);
};
const removeTekst = () => {
    let pRemov = document.querySelector("#remove");
    pRemov.innerHTML = "";

  };
  removeBtnFunction();


//---------------------------------------------------------------------

//Oppgave 2
const changeBtnFunction = () =>{
    let changeBtn = document.querySelector("#change-btn");
    changeBtn.addEventListener("click", changeTekst);
    
}
const changeTekst = () => {
    let pSetTekst = document.querySelector("#change");
    pSetTekst.innerHTML = "Hei, Verden";
  };

  changeBtnFunction();
  
//---------------------------------------------------------------------
//Oppgave 3
let inputBox = document.querySelector("#input");
let pFraInputBox = document.querySelector("#input-text");

inputBox.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        pFraInputBox.innerHTML = inputBox.value;
        inputBox.value = "";
    }
});
//---------------------------------------------------------------------
//Oppgave 4
const myList = ["item one", "item two", "item three"];
let ul = document.querySelector("#ul");

const ulButton = () =>{
    let writeList = document.querySelector("#write-list");
    writeList.addEventListener("click", fylUl);

}

const fylUl = () => {
    ul.innerHTML = ""; 
    for(let i = 0; i < myList.length; i++){
        let li = document.createElement("li");
        li.textContent = myList[i];
        ul.appendChild(li);
    }
}
 
ulButton();

//---------------------------------------------------------------------
//Oppgave 5

document.querySelector("#create").addEventListener("click", klikk);
function klikk(){
        let select = document.querySelector("#select").value;
        let text = document.querySelector("#text").value;
        nyElement = document.createElement(select);
        nyElement.textContent = text;
        let placeholder = document.querySelector("#placeholder");
        placeholder.appendChild(nyElement);
}

//---------------------------------------------------------------------
//Oppgave 6

document.getElementById("remove-li").addEventListener("click", soso);

function soso(){
    const list = document.querySelector("#list");
    list.removeChild(list.lastElementChild);
}

//---------------------------------------------------------------------
//Oppgave 7

let nameInput = document.querySelector("#name");
let orderButton = document.querySelector("#order");
nameInput.addEventListener("keyup", fofo);

function fofo (){
    let inputText = nameInput.value;

    if(inputText.length > 4 ){
        orderButton.style.border = "2px solid red";

    }else {
         orderButton.style.border = "none";
    }

}

//---------------------------------------------------------------------
//Oppgave 8
document.getElementById("color").addEventListener("click", kiki);
const liste = document.querySelectorAll(".children li");

function kiki(){
liste.forEach((item, index) => {
    if ((index + 1) % 2 === 0){
        item.style.border = "2px solid pink";
           
    }else{
        item.style.border = "2px solid green";
        
    }
});
}














