
// This will return "history_value"
function getHistory(){
     return document.getElementById("history_value").innerText;
}

// history te input ja deao hobe ta amra pabo:
function printHistory(num){
     document.getElementById("history_value").innerText = num;
}

// ja output pao jabe ta nilam:
function getOutput(){
     return document.getElementById("output_value").innerText;
}

// output ta paoar por num print e nia gelam:
function printOutput(num){
     if(num == ""){
          document.getElementById("output_value").innerText = num;
     }else{
          document.getElementById("output_value").innerText = formatNumber(num);
     }
   
}

// number gulake comma saperated korar jonno JS function use korlam: korar por function ta printOutput e call korbo.
function formatNumber(num){
     let n = Number(num);
     let value = n.toLocaleString("en");
     return value;
}

// button gula click korar por output hishabe value paoar jonno amra ekta forloop chalabo:
let history;
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
     number[i].addEventListener("click", function(){
          history = getHistory();
          history += this.id;
          printHistory(history);
     })  
}
// operator button click korar forloop:
function normalNumber(num){
     return Number(num.replace(/,/g,""));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
     operator[i].addEventListener("click", function(){   //clear button formula
          if(this.id == "clear"){
               printHistory("");
               printOutput("");
          }
          else if(this.id == "backspace"){        //backspace er formula
               history = getHistory();
               history = history.substr(0, history.length-1);
               printHistory(history);
               printOutput("");
          }
          else if(this.id == "="){           // calculation formula
               history = getHistory();
               let result = eval(history);
               printOutput(result);
               printHistory(history);
          }

          //
          else{
               let output = getOutput();
               history = getHistory();
              if(output){
               history = normalNumber(output) + this.id;
               printHistory(history);
              }else{
               history += this.id;
               printHistory(history);
              }
          }
     });  
}