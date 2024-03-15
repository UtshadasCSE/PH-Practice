const addBtn = document.getElementById("add-btn");
const deleteTask = document.getElementById("deleteTask");

addBtn.addEventListener("click", function () {
  let inputFeild = document.getElementById("taskInputValue");
  let inputValue = inputFeild.value;
  inputFeild.value = "";

  console.log("hello");
  const taskContainer = document.getElementById("task-container");
  let taskDiv = document.createElement("div");
  taskDiv.innerHTML = `
            <div id="task" class="flex justify-between items-center ">
            <li class="text-red-400 font-medium">${inputValue}</li>
            <i
                onclick="deletIt()"
                class="fa-solid fa-trash text-red-600 cursor-pointer hover:shadow-md shadow-gray-300"
            ></i>
            </div>
  `;
  taskContainer.appendChild(taskDiv);
});

const deletIt = () => {
  let task = document.getElementById("task");

  console.log("hello");
};
