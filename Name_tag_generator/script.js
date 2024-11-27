document.getElementById("addButton").addEventListener("click", addNameTag);

function addNameTag() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a name!");
    return;
  }

  const nameTagsContainer = document.getElementById("nameTagsContainer");

  // Create the name tag element
  const nameTag = document.createElement("div");
  nameTag.className = "name-tag";

  nameTag.innerHTML = `
    <strong>HELLO</strong><br>
    <small>My Name Is</small>
    <h2>${name}</h2>
    <div class="icons">
    <img src="edit.png" alt="edit" onclick="editNameTag(this)" >
    <img src="bin.png" alt="delete" onclick="deleteNameTag(this)">
    </div>
  `;

  nameTagsContainer.appendChild(nameTag);
  nameInput.value = ""; // Clear input field
}

function editNameTag(editButton) {
  const nameTag = editButton.parentElement.parentElement;
  const currentName = nameTag.querySelector("h2").innerText;

  const newName = prompt("Edit Name:", currentName);
  if (newName && newName.trim() !== "") {
    nameTag.querySelector("h2").innerText = newName.trim();
  }
}

function deleteNameTag(deleteButton) {
  const nameTag = deleteButton.parentElement.parentElement;
  nameTag.remove();
}
