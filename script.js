const adduserBtn = document.getElementById("addUser");
const btnText = adduserBtn.innertext;
const usernameTextField = document.getElementById("username");
const recordsdisplay = document.getElementById("records");
let userArray = [];
let edit_id = null;

// localStorage.clear();

let objstr = localStorage.getItem("user");
if (objstr != null) {
  userArray = JSON.parse(objstr);
}
console.log("userArray ", userArray);
displayInfo();

adduserBtn.onclick = async () => {
  const name = usernameTextField.value;
  console.log("name ", name);
  if (edit_id != null) {
    userArray.splice(edit_id, 1, { name: name });
  } else {
    userArray.push({ name: name });
  }

  saveInfo(userArray);
  displayInfo();
  usernameTextField.value = "";
  adduserBtn.innerText = "btnText";
};

function saveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("user", str);
}

function displayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    console.log("dkofnskdnf ", user, i);
    statement += `<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${user.name}</td>
                        <td><button class="btn btn-danger text-white fa fa-trash  " type="button" id="edit-btn-${i}" onclick='editInfo(${i})'>edit</button><button class="btn text-white fa fa-edit btn-info mx-3" type="button" id="delete-btn-${i}" onclick='deleteInfo(${i})'>delete</button></td>
                      </tr> `;
  });
  recordsdisplay.innerHTML = statement;
}

function editInfo(id) {
  edit_id = id;
  usernameTextField.value = userArray[id].name;
  adduserBtn.innerText = "save changes";
}

function deleteInfo(id) {
  userArray.splice(id, 1);
  saveInfo(userArray);
  displayInfo();
}
