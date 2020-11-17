add = document.getElementById("add");
update();

add.addEventListener("click" ,()=>{
    updateData()
    update();
});

function updateData(){
    tit =  document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    if ((localStorage.getItem('itemsJson')) == null){
        itemJsonArray =[];
        console.log("temJsonArray");
        itemJsonArray.push([tit,desc]);
        localStorage.setItem("itemsJson" , JSON.stringify(itemJsonArray));
        
    }
    else{
        itemJsonArraylist =  localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraylist);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem("itemsJson" , JSON.stringify(itemJsonArray));
    }
    update();
}

function update(){
    tit =  document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    
    if ((localStorage.getItem('itemsJson')) == null){
        itemJsonArray =[];
        localStorage.setItem("itemsJson" , JSON.stringify(itemJsonArray));
        
    }
    else{
        itemJsonArraylist =  localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraylist);
      
    }
     let table = document.getElementById("tab");
     let str= "";
     itemJsonArray.forEach((element , index ) => {
         str += `
         <tr>
         <td>${index + 1}</td>
         <td>${element[0]}</td>
         <td>${element[1]}</td>
         <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
       </tr>
       `
     });
     table.innerHTML = str;
}
function deleted(itemindex){
    itemJsonArraylist =  localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraylist);
itemJsonArray.splice(itemindex ,1);
    localStorage.setItem("itemsJson" , JSON.stringify(itemJsonArray));
    update();
}