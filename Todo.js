let kitcheninput=document.getElementById("kitchen-input")
let addbtn=document.getElementById("add-btn")
let kitchenitemslist=document.getElementById("kitchen-items-list")
let btn = document.getElementById("btn")


//button click cheybol function display avanm
//step2
function addkitcheniteams() {
    let kitcheninputData = kitcheninput.value;
     // create dom items
    let li =document.createElement('li');
    let span=document.createElement("span")
    span.innerText=kitcheninputData;
    //append
    kitchenitemslist.appendChild(li)
    li.appendChild(span)
    console.log(li);

    //value emty
    kitcheninput.value=''

   //crete del button
   let trashBtn = document.createElement('i') ;
   let editbutt =document.createElement("i");
        console.log(editbutt)
        editbutt.style.marginLeft= "15px"
   trashBtn.style.marginLeft ="15px"
   trashBtn.classList.add("fa-solid", "fa-trash-can");
    li.appendChild(trashBtn)
   console.log(trashBtn);
      editbutt.classList.add("fa-solid", "fa-user-pen")
    li.appendChild(editbutt);



   li.addEventListener("click",function name(event) {
    let come=event.target.classList;
    if (come[1]==="fa-trash-can") {
        event.target.parentElement.remove()
        
    }
       else if(come[1]==="fa-user-pen"){
         let editedvalue = prompt("Enter Text....");
         //li.innerHTML.editedvalue

         let newSpan = li.querySelector("span")
          newSpan.innerText =  editedvalue;
          console.log(li);
          console.log(newSpan);
       } 
    });
}
 
function clearAll()
{
  kitchenitemslist.remove()
}

//step 1
addbtn.addEventListener('click',addkitcheniteams)
btn.addEventListener("click",clearAll)







