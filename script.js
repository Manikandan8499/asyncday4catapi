const API = "https://api.thecatapi.com/v1/images/search?limit=15";

const catContainer = document.getElementById("cat-data");

async function getAllCats() {

    try {
        const res = await fetch(API, {
            method: "GET",
        });
        const data = await res.json();
        mapAllCats(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllCats();

function appendNewCat(cat){
    const mainDiv = document.createElement("div");
    mainDiv.className = "card";
    mainDiv.innerHTML +=`
    <img src=${cat.url} width=${cat.width} height=${cat.height}>
    <p>URL <span id="url-value">${cat.url}</span></p>
    <p>Width <span id="width-value">${cat.width}</span></p>
    <p>Height <span id="height-value">${cat.height}</span></p>
    `;
   catContainer.append(mainDiv);
};

function mapAllCats(cats){
    cats.map((value)=>{
        appendNewCat(value);
    })
}