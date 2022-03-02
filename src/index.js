//Import CSS
import "./index.css";

import logo from "../resources/note-taking.png";

//Append logo

let img = document.createElement("img");
img.src = logo;
img.setAttribute("class", "logoImage");
document.querySelector(".logo").appendChild(img);

//Append title
let h1 = document.createElement("h1");
h1.innerText = "Note Taking App";
h1.setAttribute("class", "header");
document.querySelector(".logo").append(h1);

document.querySelector("#addButtons").addEventListener("click", addNotes);

let notesArr = JSON.parse(localStorage.getItem("notes")) || [];
appendNotes(notesArr);

function addNotes() {
  //Get value of text content
  let value = document.querySelector("#text-area").value;

  value = value.trim();
  if (value == "") {
    alert("Please Write Something");
  } else {
    let obj = {
      text: value,
    };
    notesArr.push(obj);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    appendNotes(notesArr);
  }
}


function appendNotes(notesArr) {
  document.querySelector("#appendNotes").innerHTML = "";
  notesArr.map((el, ind) => {
    let { text } = el;

    let maindiv = document.createElement("div");
    let firstDiv = document.createElement("div");
    let p = document.createElement("p");
    let button = document.createElement("button");

    p.textContent = text;
    button.textContent = "Delete Notes";

    button.addEventListener("click" , function (e){
      e.preventDefault()
      console.log(ind)
      deleteFunction(ind)
    })

    firstDiv.append(p);
    maindiv.append(firstDiv, button);
    document.querySelector("#appendNotes").append(maindiv);
    let i = ind
    

  });
}


//Code for Delete any one 
function deleteFunction(i){
  notesArr.splice(i, 1);
  appendNotes(notesArr)
  localStorage.setItem("notes" , JSON.stringify(notesArr));
}


//Creating Cards
// const maindiv = document.createElement("div");
// const firstDiv = document.createElement("div");
// const p = document.createElement("p");
// const button = document.createElement("button");
