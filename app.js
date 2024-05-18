function taskGenerate() {
  let userInput = document.querySelector("#userInput");
  let task = document.querySelector("#task");
  let spani = document.querySelector("#spani");

  let date = new Date();

  if(userInput.value.trim() == ""){

    alert("you must write something")
  }
  else{
    task.innerText += `✅ ${userInput.value} \n `;
    spani.innerText += `📌 ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  \n `;
    userInput.value = "";
  }

  
}
