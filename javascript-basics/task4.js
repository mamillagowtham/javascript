document.querySelector("form").addEventListener("submit",toDoList)

function toDoList()
{
  event.preventDefault();
  let itemName = document.querySelector("#item").value;
  let itemQuantity = document.querySelector("#qty").value;
  let itemPriority = document.querySelector("#pry").value;



  let tr =document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText=itemName;
  let td2 = document.createElement("td");
  td2.innerText=itemQuantity;
  let td3 = document.createElement("td");
  td3.innerText=itemPriority;

  tr.append(td1,td2,td3);

  document.querySelector("tbody").append(tr);
  



}