const btns = document.querySelectorAll('button');

for(let btn of btns) {
    btns.addEventListener('click', function(){
        console.log(`${btn.innerText} clicked`);
    })
}