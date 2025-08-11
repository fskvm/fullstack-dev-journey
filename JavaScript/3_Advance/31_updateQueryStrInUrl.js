let url = "http://universities.hipolabs.com/search?name="


let btn = document.querySelector("button");

btn.addEventListener('click', async () => {
    let country = document.querySelector("#inp").value;
    let colArr = await getUniversities(country);
    show(colArr);
});

async function getUniversities(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch(e) {
        console.error("Error fetching universities:", e);
        return [];
    }
}

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; // Clear previous results
    for(let coll of colArr) {
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
}






