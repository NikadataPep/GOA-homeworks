let sect1 = document.getElementById("first");
let sect2 = document.getElementById("second");
let sect3 = document.getElementById("third");

let idDivs = []; //// შეინახავს div-ების id-ებს

for (let i = 0; i < 9; i++) {
  let idName = `div${i}`; //// id-ის სახელების შექმნა
  sect1.innerHTML += `<div id='${idName}'></div>`;
  idDivs.push(idName); /// id-ის სახელის შენახვა
}

for (let i = 0; i < 9; i++) {
  sect2.innerHTML += "<div class='div2'></div>";
}

for (let i = 0; i < 9; i++) {
  sect3.innerHTML += "<div></div>";
}

let classDivs = document.getElementsByClassName("div2");
let divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "#b696b1";
  divs[i].style.width = "9vw";
  divs[i].style.height = "9vw";
}

for (let i = 0; i < idDivs.length; i++) {
  let elem = document.getElementById(idDivs[i]);

  elem.style.backgroundColor = "#f7bd3b";
}

for (let j = 0; j < classDivs.length; j++) {
  classDivs[j].style.backgroundColor = "#13a589";
}

