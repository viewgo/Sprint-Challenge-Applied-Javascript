// // STEP 3: Create Article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// // Stduy the response data you get back, closely.
// // You will be creating a component for each 'article' in the list.
// // This won't be as easy as just iterating over an array though.
// // Create a function that will programmatically create the following DOM component:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>
// //
// // Create a card for each of the articles and add the card to the DOM.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const cards = document.querySelector(".cards-container");

        iLength = Object.keys(response.data.articles).length;

        for (let i = 0; i < iLength; i++) {
            let index = Object.keys(response.data.articles)[i];

            response.data.articles[index].forEach(element => {
                cards.appendChild(CardMaker(element));
            });
        }
    })

    .catch(error => {
        console.log("The data was not returned", error);
    });

function CardMaker(data) {

    const card = document.createElement("div");
    card.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = data.headline;
    card.appendChild(headline);

    const author = document.createElement("div");
    author.classList.add("author");
    card.appendChild(author);

    const imgdiv = document.createElement("div");
    imgdiv.classList.add("img-container");
    author.appendChild(imgdiv);

    const img = document.createElement("img");
    img.src = data.authorPhoto;
    imgdiv.appendChild(img);

    const name = document.createElement("span");
    name.textContent = data.authorName;
    author.appendChild(name);

    return card;
}
