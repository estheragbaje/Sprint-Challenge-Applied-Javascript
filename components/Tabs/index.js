// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//creating the div component with a class of tab
function tabMaker(topic) {
  const divTab = document.createElement("div");
  divTab.classList.add("tab");
  divTab.textContent = topic;
  console.log(divTab);
  return divTab;
}
// tabMaker(topic);

//query selecting the div with a class topcis
const topicsDiv = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const topicsArray = response.data.topics;
    topicsArray.forEach(item => {
      const tabs = tabMaker(item);
      topicsDiv.appendChild(tabs);
    });
  })

  .catch(error => {
    // document.body.textContent = "error";
  });
