let addName = document.querySelector(".name");

let persons = ["Aro", "Gugo"];

function htmlMessages() {
  setTimeout(() => {
    let htmlMessage = "";
    persons.forEach((person) => {
      htmlMessage += `
      <li>${person}</li>
     `;
    });
    addName.innerHTML = htmlMessage;
  }, 2000);
}

function addName(name, callback) {
  setTimeout(() => {
    persons.push(name);
    callback();
  }, 4000);
}

addName("Edik", htmlMessages);
