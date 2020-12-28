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

function foo2(name, callback) {
  setTimeout(() => {
    persons.push(name);
    callback();
  }, 4000);
}

foo2("Edik", htmlMessages);
