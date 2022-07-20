//alert("hello");
function addNewwEField(){

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("placeholder", "Enter here");

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);


}

function addNewAqField(){
  let newNode1 = document.createElement('textarea');
  newNode1.classList.add('form-control');
  newNode1.classList.add('aqField');
  newNode1.classList.add('mt-2');
  newNode1.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode1, aqAddButtonOb);


}

function addNewCertField() {
 newNode2 = document.createElement('textarea');
newNode2.classList.add('form-control');
newNode2.classList.add('crtField');
newNode2.classList.add('mt-2');
newNode2.setAttribute("placeholder", "Enter here");

let certOb = document.getElementById("cert");
let certAddButtonOb = document.getElementById("certAddButton");

certOb.insertBefore(newNode2, certAddButtonOb);

}


// generating cv
function generateCV(){
  // alert("hello");
let nameField = document.getElementById("nameField").value;
let nameT1 = document.getElementById('nameT1');
nameT1.innerHTML = nameField;
//direct
document.getElementById("nameT2").innerHTML= nameField;

// contact
let contactField = document.getElementById("contactField").value;
document.getElementById("contactT").innerHTML= contactField;
//address
let addressField = document.getElementById("addressField").value;
document.getElementById("addressT").innerHTML= addressField;

//Links-fb
let fbField = document.getElementById("fbField").value;
document.getElementById("fbT").innerHTML= fbField;

//link-LinkedIn
let linkedField = document.getElementById("linkedField").value;
document.getElementById("linkedT").innerHTML= linkedField;

//link-github
let gitField = document.getElementById("gitField").value;
document.getElementById("gitT").innerHTML= gitField;

//objective
let objectiveField = document.getElementById("objectiveField").value;
document.getElementById("objectiveT").innerHTML= objectiveField;


//work experiance
let wes = document.getElementsByClassName("weField");

let str = "";

for (let e of wes ) {
 str = str + `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML = str;

//Academic Qualification
let aqs = document.getElementsByClassName("aqField");

let str1 = "";

for (let e1 of aqs ) {
 str1 = str1 + `<li> ${e1.value} </li>`;
}
document.getElementById("aqT").innerHTML = str1;

//Certifications
let crs = document.getElementsByClassName("crtField");

let str2 = "";

for (let e2 of wes ) {
 str2 = str2 + `<li> ${e2.value} </li>`;
}
document.getElementById("crtT").innerHTML = str2;



let file = document.getElementById("imgField").files[0];
console.log(file);
let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);


reader.onloadend = function(){
  document.getElementById('imgTemplate').src = reader.result;

}


document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';



}

function printCV(){
  window.print();
}
