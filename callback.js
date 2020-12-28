let addName = document.querySelector(".name");

let persons = ["Aro", "Gugo"];

function htmlMessages() {
  let htmlMessage = "";

  persons.forEach((person) => {
    htmlMessage += `
      <li>${person}</li>
     `;
  });
  addName.innerHTML = htmlMessage;
}

function foo2() {
  persons.push("asasdas");
}

htmlMessages();
setTimeout(foo2, 4000);
