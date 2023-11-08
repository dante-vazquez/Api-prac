// api url
const api_url = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/artists";

const images = [];
const thumbnailContainer = document.getElementById('image-container');

//elements

 
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

    images.forEach(item => {

        //image element
        const imageElement = document.createElement('img');
        imageElement.src = item.imageUrl;

        //name element
        const artistNameElement = document.createElement('p');
        artistNameElement.textContent = item.artistName;
        console.log("name " + item.artistName);

        //create a div and place inside thumbnail container
        const clickableItemContainer = document.createElement('div');
        clickableItemContainer.appendChild(artistNameElement);
        clickableItemContainer.appendChild(imageElement);
        thumbnailContainer.appendChild(clickableItemContainer);

        clickableItemContainer.addEventListener("click", () => {
            alert(`You clicked on ${item.artistName}`);
        });
    })
}




getapi(api_url);
