
let date = new Date();
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = date.getFullYear();

function taskGenerate() {
  let userInput = document.querySelector("#userInput");
  let task = document.querySelector("#task");
  let spani = document.querySelector("#spani");
  let error = document.querySelector("#error");

  let date = new Date();

  if(userInput.value.trim() == ""){
    error.innerText = "you must write something !!"
    // alert("you must write something")
  }
  else{
    task.innerText += `✅ ${userInput.value} \n `;
    spani.innerText += `📌 ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  \n `;
    userInput.value = "";
    error.innerText = ""
  }
}

