// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCreator(item) {
  //creating the div element with a class card
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  //creating the div element with the class of headline
  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");

  //creating the div element with the class of author
  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  //creating the div element with the class of imgContainer
  const divImg = document.createElement("div");
  divImg.classList.add("img-container");

  //creating the img element
  const image = document.createElement("img");

  //creating the span element
  const span = document.createElement("span");

  //assigning textContent to the newly created elements
  divHeadline.textContent = item.headline;
  divAuthor.textContent = item.authorName;
  image.setAttribute("src", item.authorPhoto);
  span.textContent = `By ${item.authorName}`;

  //appending elements
  divImg.appendChild(image);
  divAuthor.appendChild(divImg);
  divAuthor.appendChild(span);
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);

  console.log(divCard);
  return divCard;
}
//query selecting the div with the class cardsContainer
const divContainer = document.querySelector(".cards-container");

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     const articles = response.data.articles;
//     const articleKeys = Object.keys(articles);

//     articleKeys.forEach(topic => {
//       const topics = response.data.articles[topic];
//       topics.forEach(topic => {
//         const article = articleCreator(topic);
//         divContainer.appendChild(article);
//       });
//     });
//   })
//   .catch(error => {
//     // document.body.textContent = "error";
//   });

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     const articleKeys = Object.keys(response.data.articles);
//     console.log(articleKeys);

//     articleKeys.forEach(index => {
//       const articleValue = Object.values(response.data.articles[index]);
//       console.log(articleValue);

//       //   articleValue.forEach(topic => {
//       //     const finalresult = articleCreator(topic);
//       //     divContainer.appendChild(finalresult);
//       //   });
//     });
//   });
