//* DOM(Document Object Model) - The DOM represents a document with a logical tree structure.
//*    It allows us to manipulate/change the webpage content, structure, and style dynamically using JavaScript.
/*   Every HTML element is represented as a node in the DOM tree.
     Each is basically a JavaScript object that can be accessed and modified.
     hence, by default, document object is present in the browser.
           document
              |
            body
              |
          ________
         |        |
        div       ul
         |        |
         h1       li
 */

console.log(document); // this will log the entire document object to the console
console.dir(document); // this will log the document object as a tree structure in the console
