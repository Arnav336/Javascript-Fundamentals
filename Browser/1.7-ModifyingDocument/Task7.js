function createList() {
    const ul = document.getElementById("list");
    ul.innerHTML = ""; // clear previous list if any

    while (true) {
      let input = prompt("Enter a list item:");

      if (input === null || input.trim() === "") break;

      let li = document.createElement("li");
      li.textContent = input; // ✅ treats HTML tags as plain text
      ul.appendChild(li);
    }
  }