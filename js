

let todolist = [];
let missedtask = [];

let div = document.querySelector(".records");

function arrange() {


  div.innerHTML = "Your records<br>";


  for (let j = 0; j < todolist.length; j++) {
    let para = document.createElement("p");

  
    para.innerHTML = `
      ${todolist[j].name} before ${todolist[j].date_limit} upto ${todolist[j].time}
      <button onclick="deleteItem(${j})">delete</button>
    `;

 
    div.appendChild(para);
  }
}



setInterval(() => {
  

   for(let k = todolist.length-1;k>=0;k--){

    let date = new Date();
    let tododatetime = new Date(`${todolist[k].date_limit}T${todolist[k].time}`);

    
    if(tododatetime<=date){
        missedtask.push(todolist[k]);
        deleteItem(k);

    }
   }
}, 1000);






function deleteItem(index) {
  todolist.splice(index, 1);
  arrange();
}

let heading = document.createElement("h3");
    document.body.querySelector("h2").appendChild(heading);
    let p = document.createElement("p");

    let showMissed = false; 

function showmissedtask(){

    const btn = document.querySelector("h2 button");

    if (!showMissed) {

        btn.innerHTML = `Hide Missed Tasks`;
    heading.innerHTML = ``;
    heading.innerHTML = `<br>Missed Tasks`;
    
    p.innerHTML = ``;

    for (let i = 0; i < missedtask.length; i++) {
      
        
      p.innerHTML += `<br>
        ${missedtask[i].name} - ${missedtask[i].date_limit} - ${missedtask[i].time}<br>
      `;
      document.body.querySelector("h2").appendChild(p);
    }
    showMissed = true;

    }

    else{

        heading.innerHTML = ``;
        p.innerHTML = "";
        btn.innerHTML = `Show Missed Tasks`;
        showMissed = false;
    }

}

const add = () => {
  let entry = document.querySelector("#entry");
  let date_limit = document.querySelector("#date");
  let time = document.querySelector("#time");


  todolist.push({
    name: entry.value,
    date_limit: date_limit.value, 
    time: time.value
  });



  arrange();
  console.log(todolist);
};
