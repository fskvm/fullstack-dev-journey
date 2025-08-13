//! note: if we are using Free api, they have rate limit, so we can not call them too many times or using Loops to call

//* Axios - It a library for making promised-based HTTP requests in JavaScript. It is often used in web applications to interact with APIs and retrieve or send data to a server.
//*         It is similar to the Fetch API but provides additional features like request cancellation, interceptors, and automatic JSON data transformation.
//? we can install or use a CDN link
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
    try{
       let res = await axios.get(url);
       console.log(res);
       return res.data.fact;
    } catch(e) {
        console.log("Error -", e);
        return "";
    }
}

let btn = document.querySelector("button");
btn.addEventListener('click', async () =>{
    let p = document.querySelector("#result");
    p.innerText = await getFacts();
})

async function getDogImg(){
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e) {
        console.log("Error -", e);
        return '/';
    }
}

let btn2 = document.querySelector("#btn");
let img = document.querySelector("#dogImg");
btn.addEventListener('click', async () => {
    let url = await getDogImg();
    img.setAttribute("src", url);
})