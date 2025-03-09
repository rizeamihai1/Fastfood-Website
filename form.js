
window.onload = function(){
  const value = document.querySelector('#values');
  const input = document.querySelector('#importanta');
  value.textContent = input.value;
  input.addEventListener("input", (event) => {
    value.textContent = event.target.value + "%";
  });


  var bgcolorForm = document.getElementById("bgcolor");

  if(!localStorage.getItem("bgcolor")) {
    populateStorage();
  }
  bgcolorForm.onchange = populateStorage;
};

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor"));
  setStyle();
}
function setStyle() {
  var currentColor = localStorage.getItem("bgcolor");
  document.getElementById("bgcolor").value = currentColor;
  document.body.style.backgroundColor = currentColor;
}

document.addEventListener('DOMContentLoaded', () => {
  const navigare = document.querySelector('nav');
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  navigare.style.backgroundColor = '#f19234';
  console.log(backgroundColor);
  const button = document.querySelector('button');
  button.style.backgroundColor = '#f18234';
});

