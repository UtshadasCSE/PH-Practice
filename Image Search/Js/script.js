let page = 1;
const accessKey = "3wfqrUBY-a18LAZ5w6nQ0wDgMlPJ14BZLG4sPuhf7mU";

// find all element from html file
const formEl = document.getElementById("form");
const inputEl = document.getElementById("inputField");
const searchResultContainer = document.getElementById("searchResultContainer");
const searchBtn = document.getElementById("searchBtn");
const showMoreBtn = document.getElementById("showMoreBtn");
const searchIItem = inputEl.value;
const fetchApiData = async () => {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchIItem}&client_id=${accessKey}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  showDataDisplay(data);
};
fetchApiData();
const showDataDisplay = (data) => {
  data.map((element) => {
    const containerDiv = document.createElement("div");
    containerDiv.classList(
      "grid grid-cols-3 max-sm:grid-cols-2 gap-5 w-4/5 max-sm:w-11/12"
    );
    const underContainerDiv = document.createElement("div");
    underContainerDiv.innerHTML = `
            <div class="flex flex-col gap-7">
            <img
              class="w-full rounded-xl shadow-2xl shadow-[#535C91]"
              src="${element.results.urls.small}"
              alt=""
            />
            <h3 class="text-white text-xl font-bold">$${element.results.alt_description}</h3>
          </div>
    `;
    containerDiv.appendChild(underContainerDiv);
  });
};
searchBtn.addEventListener("click", () => {
  fetchApiData();
});
