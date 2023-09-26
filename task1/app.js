
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
var item2= document.querySelector(".list-group-item:nth-child(2)");
item2.style.backgroundColor="green";

var item3= document.querySelector(".list-group-item:nth-child(3)");
item3.style.visibility = "hidden";
