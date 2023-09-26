var items= document.getElementsByClassName("list-group-item");
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}
items[2].style.backgroundColor="green";

var item1= document.getElementsByClassName("list-group-item-1");
for(var i=0;i<item1.length;i++)
{
    item1[i].style.backgroundColor="red";
}