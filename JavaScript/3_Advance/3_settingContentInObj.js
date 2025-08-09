let para = document.querySelector('p');

//* innerText - Shows all the visible text contained on the screen, excluding any hidden text.
//*                 It respects the CSS styles and slower performance due to reflow and repaint.
console.log(para.innerText);

//* textContent - Shows all the text content, including hidden text, and does not respect CSS styles.
//*                 It is faster as it does not trigger reflow and repaint.
console.log(para.textContent);

//* innerHTML - Shows the full HTML content, including tags, and allows you to manipulate the HTML structure.
//*                 It is slower than textContent due to parsing HTML and can lead to security issues if not used carefully (e.g., XSS attacks).
console.log(para.innerHTML);

para.innerText = 'hey, I am Peter Parker';
para.innerText = 'hey, I am <b>Peter Parker</b>'; // it will treat the HTML tags as plain text

para.innerHTML = 'hey, I am <b>Peter Parker</b>';

document.querySelector('h1').innerHTML = `<u>${document.querySelector('h1').innerText}</u>`
// ! or by using variable
let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;