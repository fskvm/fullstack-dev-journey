// console.dir(document.all[7].innerText= "Peter Parker");

//* 1) 'getElementById' is method of document object - This will return the single DOM element as an object or null if not found.
console.dir(document.getElementById(mainImg)); // this is treated as a variable, which is not defined --> null
console.dir(document.getElementById("mainImg")); // this is treated as a string, which is defined --> <img id="mainImg" src="images/1.jpg" alt="Image 1">

let imgObj = document.getElementById("mainImg");
console.dir(imgObj); // it is returning the object of the image element
imgObj.src = "creation_1.png"; // changing the source of the image



//* 2) 'getElementsByClassName' is a method of document object - This will return a collection of DOM elements as an array-like object or empty collection if not found.
console.dir(document.getElementsByClassName("abcd")); // HTMLCollection(0) [] - empty collection if not found
let smallImages = document.getElementsByClassName("oldImg");

for(let i of smallImages){
    i.src = "spiderman_img.png";
    console.log("image value is changed");
}
//! or
for(let i = 0; i < smallImages.length; i++){
    smallImages[i].src = "spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}


document.getElementsByClassName("boxLink")[0].innerText = "abcd"; // this will change the text of the first element with class 'boxLink' to 'abcd'


//* 3) 'getElementsByTagName' is a method of document object - Similar to 'getElementsByClassName', here tag name can be capital or small letters
document.getElementsByTagName("p")[1].innerText =  "abcd";
document.getElementsByTagName("span"); // HTMLCollection(0) [] - empty collection if not found


//* 4) 'querySelector' is a method of a document object which is Mostly used in modern JavaScript - This will return the first DOM element that matches the CSS selector or null if not found.

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".boxLink"));

//todo - if you want to select all the elements that match the CSS selector, use 'querySelectorAll' method
console.dir(document.querySelectorAll(".boxLink")); // NodeList(4) - [div.boxLink, div.boxLink, div.boxLink, div.boxLink] as it is storing in form of tree structure that is why it is returning NodeList

//todo - we can also select the elements with all kinds of CSS selectors syntax such as 'div.boxLink', 'div > .boxLink', '#description > p', etc.
console.dir(document.querySelector("div a"));