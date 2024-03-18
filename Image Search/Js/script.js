let page = 1;
const accessKey = "3wfqrUBY-a18LAZ5w6nQ0wDgMlPJ14BZLG4sPuhf7mU";

// find all element from html file
const formEl = document.getElementById("form");

const searchResultContainer = document.getElementById("searchResultContainer");
const searchBtn = document.getElementById("searchBtn");
const showMoreBtn = document.getElementById("showMoreBtn");

const fetchApiData = async (search) => {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${accessKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const results = data.results;
  console.log(results);
  showDataDisplay(results);
};

const showDataDisplay = (datas) => {
  const containerData = document.getElementById("searchResultContainer");

  containerData.textContent = "";

  datas.slice(0, 6).forEach((element) => {
    const underContainerDiv = document.createElement("div");
    underContainerDiv.innerHTML = `
            <div class="flex w-full flex-col gap-4 ">
            <img
              class="w-[100%]  h-[200px]  rounded-xl shadow-2xl shadow-[#535C91]"
              src="${element.urls.small}"
              alt=""
            />
            <h3 class="text-white text-xl font-bold">${element.alt_description.slice(
              0,
              20
            )}</h3>
          </div>
    `;
    containerData.appendChild(underContainerDiv);
  });
  // containerData.appendChild(containerDiv);
};
searchBtn.addEventListener("click", () => {
  const inputEl = document.getElementById("inputField");
  const searchIItem = inputEl.value;
  fetchApiData(searchIItem);
});
