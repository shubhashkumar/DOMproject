
// var items= document.getElementsByClassName("list-group-item");
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold";
// }
// items[2].style.backgroundColor="green";

// var item1= document.getElementsByClassName("list-group-item-1");
// for(var i=0;i<item1.length;i++)
// {
//     item1[i].style.backgroundColor="red";
// }

// var item2= document.getElementsByTagName("li");
// for(var i=0;i<item2.length;i++)
// {
//     item2[i].style.backgroundColor="yellow";
//     item2[i].innerHTML="I have changed";
// }

//query selector
// var item2= document.querySelector(".list-group-item:nth-child(2)");
// item2.style.backgroundColor="green";

// var item3= document.querySelector(".list-group-item:nth-child(3)");
// item3.style.visibility = "hidden";

//query selector all
// var odds= document.querySelectorAll("li:nth-child(odd)");
// for(var i=0;i<odds.length;i++)
// {
//     odds[i].style.backgroundColor="green";
// }
// var evens= document.querySelectorAll("li:nth-child(even)");
// for(var i=0;i<evens.length;i++)
// {
//     evens[i].style.backgroundColor="yellow";
// }

//traversing the DOM
//var itemList= document.querySelector("#items");
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="yellow";
//console.log(itemList.childNodes.length);
//console.log(itemList.childElementCount);
//console.log(itemList.lastElementChild);
//itemList.parentElement.style.backgroundColor="yellow";
//itemList.parentElement.parentElement.parentElement.style.border="10px solid";
//console.log(itemList.parentElement.parentElement.parentElement.parentElement);

//child element
// itemList.firstElementChild.addEventListener("mouseover",()=>
// {
//     itemList.firstElementChild.innerHTML="Pen";
// })
// itemList.firstElementChild.addEventListener("mouseout",()=>
// {
//     itemList.firstElementChild.innerHTML="add first element";
// })
//console.log(itemList.childNodes);
// console.log(itemList.children);
// for(var i=0;i<itemList.children.length;i++)
// {
//     itemList.children[i].style.border="dotted";
//     itemList.children[i].style.backgroundColor="brown";
// }
//last child ,lastelement child
//next sibling previous sibling
// //create element
//create a div
//var newDiv=document.createElement("div");
//add class
//newDiv.className="hello";
//newDiv.id="hello1";
//add attribute
//newDiv.setAttribute("title","hello div");
//console.log(newDiv);
//create a text node
//var addText= document.createTextNode("Hellow World");
//add text to div
// newDiv.appendChild(addText);
// console.log(newDiv);
//itemList.firstElementChild.append(newDiv);

//var headText=document.createTextNode("HEllo Word ");
//var container= document.querySelector("head title");
//console.log(container);
//container.append(newDivText);
//container.prepend(newDivText);
//var items= document.querySelector('.list-group')
//console.log(items);
// var firstItem= document.querySelector('.list-group li')
// items.insertBefore(newDiv,firstItem);
// items.style.backgroundColor="red";

var form= document.getElementById('addForm');
//console.log(form);
var itemList= document.getElementById("items");
//console.log(itemList);

//form submit event 
form.addEventListener("submit",addItem);
function addItem(e)
{
    e.preventDefault();
    //get input value
    var newItem= document.getElementById("item").value+document.getElementById("itemi").value;
    //create new li element 
    var li= document.createElement("li");
    //add class 
    li.className="list-group-item";
   // console.log(li);
   li.appendChild(document.createTextNode(newItem));
   console.log(li);
   itemList.appendChild(li);
   // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

}
//delete event
itemList.addEventListener('click', removeItem);
function removeItem(e)
{
 if(e.target.classList.contains('delete'))
 {
   if(confirm("are you sure?"))
   {
    var li=e.target.parentElement;
    //console.log(li);
    itemList.removeChild(li);
   }
 }
}

//filter 
var filter= document.getElementById("filter");
//filter event
filter.addEventListener("keyup",filterItems);
function filterItems(e)
{
    //convert into lowercase
    var text= e.target.value.toLowerCase();
    //console.log(text);
    //get lists
    var items= itemList.getElementsByTagName("li");
   // console.log(items);
   Array.from(items).forEach(function(itemA)
   {
     var itemName=itemA.firstChild.textContent;
     //console.log(itemName);
     if(itemName.toLowerCase().indexOf(text)!= -1)
     {
        itemA.style.display="block";
     }
     else{
        itemA.style.display="none";
     }
   });
}