const inputBox = document.getElementById("inputbox");
const listCon = document.getElementById("list");

function addTask(){
   if(inputBox.value == ''){
       alert("You must write something...");
   }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
   }
   inputBox.value = '';
   saveData()
}

listCon.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listCon.innerHTML);
}

function showTask(){
    listCon.innerHTML = localStorage.getItem("data");
}

showTask();