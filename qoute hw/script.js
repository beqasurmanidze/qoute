let url = ` https://api.quotable.io/random`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let content = data.content;
    console.log(content);

    let author = data.author;
    console.log(author);
    let qoute = document.querySelector(".container");
    qoute.textContent = content;
    qoute.classList.add("author");

    let writer = document.querySelector("#author");
    writer.textContent = author;
  });
