const url = "https://icanhazdadjoke.com/";


//? Sending Headers with an API request using Axios - In this API or Link, the data comes in HTML format by default, but we want it in JSON format. To achieve this, we need to send a header with the request to specify that we want the response in JSON format.
async function getDadJoke() {
    try{
        const config = { headers: { Accept: "application/json" } }; //? Creating a configuration object with custom headers. This ensures the server knows we expect a JSON response by setting the "Accept" header.
        let res = await axios.get(url, config); //?  The second argument, 'config', is passed to include any additional request options, like headers.
        console.log(res.data);
    } catch(e) {
        console.error("Error fetching dad joke:", e);
    }
}

getDadJoke();