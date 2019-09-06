// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

//converting data to an object
data = {
  date: "MARCH 28, 2019",
  heading: "Lambda Times",
  temperature: "98°"
};

function Header(data) {
  //creating the div element with a class of header
  const divHeader = document.createElement("div");
  divHeader.classList.add("header");

  //creating the span element for date with a class of date
  const spanDate = document.createElement("span");
  spanDate.classList.add("header");

  //creating the headline
  const headline = document.createElement("h1");

  //Creating the span element for temperature with a class of temperature
  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");

  //adding content to elements
  spanDate.textContent = data.date;
  headline.textContent = data.heading;
  spanTemp.textContent = data.temperature;

  //appending elements to divHeader
  divHeader.appendChild(spanDate);
  divHeader.appendChild(headline);
  divHeader.appendChild(spanTemp);
  console.log(divHeader);
  return divHeader;
}

const output = Header(data);

//adding to the DOM header-container
const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(output);
