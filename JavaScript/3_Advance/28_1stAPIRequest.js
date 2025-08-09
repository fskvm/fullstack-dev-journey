let url = "https://catfact.ninja/fact";

fetch(url) //? fetch is a built-in function in JavaScript to make HTTP requests, and it returns a Promise
    .then((res) => {
        console.log(res);  //? Log the response object to the console, but it is not in JSON format yet though we can see the data in the network tab of fact in browser

        return res.json(); //? Convert the response to JSON format
    })
    .then((data1) => {
        console.log(data1);  //? Log the data to the console, which is now in JSON format

        console.log(data1.fact); //? Log the specific fact from the data
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log(data2.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data3) => {
        console.log(data3.fact);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    })

console.log("this will run first"); //? This will run before the fetch request completes because fetch is asynchronous

//? Using async/await for better readability

async function getFacts(){
    // let res = fetch(url);
    // console.log(res); //! this will be undefined because fetch is asynchronous and we need to await its completion
    try { //! To handle errors if url is incorrect or the request fails
        let res = await fetch(url);
        let data1 = await res.json(); //! we use await here also because it is also asynchronous operation
        console.log(data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

getFacts();


//todo Free APIs
// 1. Potter DB
//    Docs - https://potterdb.com/?ref=apislislist.com
//    API - https://api.potterdb.com/
// 2. Random Cats
//    Docs - https://cataas.com/doc.html
//    API - https://cataas.com
// 3. Reddit
//    Docs - https://www.reddit.com/dev/api/
//    API - https://www.reddit.com/r/Wallstreetbets/top.json
// 4. Food Facts
//    Docs - https://wiki.openfoodfacts.org/API
//    API - https://world.openfoodfacts.org/api/v0/product/737628064502.json
// 5. Random Jokes
//    Docs - https://sv443.net/jokeapi/v2/
//    API - https://v2.jokeapi.dev/joke/Any?safe-mode
// 6. Dictionary
//    Docs - http://dictionaryapi.dev/
//    API - https://api.dictionaryapi.dev/api/v2/entries/en/digital
// 7. Quotes
//    Docs - https://pprathameshmore.github.io/QuoteGarden/
//    API - https://quote-garden.onrender.com/api/v3/quotes
// 8. Library
//    Docs - https://openlibrary.org/developers/api
//    API - http://openlibrary.org/api/volumes/brief/isbn/9780525440987.json
// 9. Generates Fake Data
//    Docs - https://fakerapi.it/en
//    API - https://fakerapi.it/api/v1/credit_cards?_quantity=2
// 10. Football Data
//     Docs - https://www.football-data.org/documentation/quickstart
//     API - http://api.football-data.org/v4/competitions/