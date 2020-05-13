const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var a = 0;
function AddElement() {
   while(a < works.length){
       var b = 0;
       var div1 = document.createElement("div");
       var div2 = document.createElement("div");
       var div3 = document.createElement("div");
       var bt = document.createElement("button");
       var h3 = document.createElement("h3");
       var H3 = document.createElement("h3");
       var h4 = document.createElement("h4");
       var h5 = document.createElement("h5");
       var Div = document.getElementsByClassName("flex-container");
       h3.style.display = "inline";
       h5.style.display = "inline";
       h5.style.marginLeft = "1em";
       bt.append(document.createTextNode("Visit"));
       div1.setAttribute("class","item");
       div2.setAttribute("class","inner-box");
       div3.setAttribute("class","inner-box");
       h4.setAttribute("class","justify");
       h3.append(document.createTextNode(works[a].author));
       H3.append(document.createTextNode("Popular Photos"));
       h4.append(document.createTextNode("Genre : "+works[a].tips));
       h5.append(document.createTextNode("lifetime:"+works[a].lifetime));
       div1.appendChild(h4);
       Div[0].appendChild(div1);
       div1.appendChild(div2);
       div2.appendChild(h3);
       div2.appendChild(h5);
       while(b < works[a].photos.length){
           if(b === 0) {
               div3.appendChild(H3);
           }
           var img = document.createElement("img");
           img.setAttribute("class","photo");
           img.src = works[a].photos[b];
           div3.appendChild(img);
           b++;
       }
       if(b === works[a].photos.length){
           b = 0;
       }
       div1.appendChild(div3);
       div1.appendChild(bt);
       a++;
   }
}
AddElement();