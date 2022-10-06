/*
   Filename: list.js

   Variable List:

   aNames: Contains the product or event name
   aPrices: Contains the product price or event date.
   aDescriptions: Contains the product description
   aImages: Contains a thumbnail product image
   aImages2: Contains a larger product image

*/

aNames = new Array();
aPrices = new Array();
aDescriptions = new Array();
aImages = new Array();
aImages2 = new Array();

aNames[0]="Goose Down Sleeping Bag";
aPrices[0]=259.99;
aDescriptions[0]="This rectangular or mummy cold weather bag is suitable for temperatures down to 0F.";
aImages[0]="bags_thumb.png";
aImages2[0]="bags.jpg";


aNames[1]="Hiking Shorts";
aPrices[1]=29.99;
aDescriptions[1]="Soft, comfortable, lightweight cotton twill fabric and a classic fit highlight these shorts.";
aImages[1]="shorts_thumb.png";
aImages2[1]="shorts.jpg";


aNames[2]="Fleece Pullover";
aPrices[2]=59.99;
aDescriptions[2]="A superb springtime layering choice, the Fleece Pullover has excellent wind resistance and warmth in a streamlined package.";
aImages[2]="fleece_thumb.png";
aImages2[2]="fleece.jpg";


aNames[3]="Airstream Canvas Shoes";
aPrices[3]=39.99;
aDescriptions[3]="These comfortable shoes tackle outdoor activities in all kinds of weather!";
aImages[3]="shoes_thumb.png";
aImages2[3]="shoes.jpg";


aNames[4]="All-Weather Mountain Parka";
aPrices[4]=199.99;
aDescriptions[4]="This two-layer parka offers rugged, waterproof protection and excellent breathability.";
aImages[4]="parka_thumb.png";
aImages2[4]="parka.jpg";

function getID()
{
  var url = window.location.toString();
  var u = 0;
  if(url.indexOf("?id=")>0)
  {
    var start = url.lastIndexOf("?id=")+ 4;
    u = url.substring(start);
  }
  return u;
}