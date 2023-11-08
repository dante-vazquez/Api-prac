// api url
const api_url = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/artists";

const images = [];
 
// Defining async function
async function getapi(url) {

    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    //printSomething(data);
    loadImages(data);
    console.log(images);
    renderImages();

}


// Calling that async function

function printSomething(inData){
    console.log(inData.data[0].name);
}

function loadImages(inData){
    for(let i = 0; i < inData.data.length; i++){

        // console.log(inData.data[i].name);
        // console.log(inData.data[i].imageUrl);

        const thumbnail = {
            artistName: inData.data[i].name,
            imageUrl: inData.data[i].imageUrl
        }
        images.push(thumbnail);
    }
}

function renderImages(){

    //this is where the image and name will be placed
    const thumbnailContainer = document.getElementById('image-container');

    images.forEach(item => {

        //image element
        const imageElement = document.createElement('img');
        imageElement.src = item.imageUrl;

        //name element
        const artistNameElement = document.createElement('p');
        artistNameElement.textContent = item.artistName;
        console.log("name " + item.artistName);

        //create a div and place inside thumbnail container
        const itemContainer = document.createElement('div');
        itemContainer.appendChild(artistNameElement);
        itemContainer.appendChild(imageElement);
        thumbnailContainer.appendChild(itemContainer);
    })
}


getapi(api_url);
