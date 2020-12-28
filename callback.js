let persons = ["Aro", "Gugo"];

function htmlMessages(callback) {
  callback();
  persons.forEach((person) => {
    let item = document.createElement("li");
    item.innerText = person;
    document.body.append(item);
  });
}

function foo2() {
  persons.push("asasdas");
  console.log(persons);
}

htmlMessages(function () {
  setTimeout(foo2, 4000);
});
