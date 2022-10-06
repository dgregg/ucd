/*
   Filename: list.js

   Variable List:

   Names: Contains the product or event name
   Prices: Contains the product price or event date.
   Descriptions: Contains the product description
   Images: Contains a thumbnail product image
   Images2: Contains a larger product image

*/


function getID()
{
  var url = window.location.toString();
  var i = 0;
  if(url.indexOf("?id=")>0)
  {
    var start = url.lastIndexOf("?id=")+ 4;
    i = url.substring(start);
  }
  return i;
}