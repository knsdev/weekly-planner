let items = [
  {
    name: "Banana",
    image: "./images/banana.jpg",
    description: "Need %count% bananas.",
    count: 4,
    priority: 0,
    deadline: "01.07.2025",
  },
  {
    name: "Apple",
    image: "./images/apple.jpg",
    description: "Need %count% apples.",
    count: 2,
    priority: 0,
    deadline: "01.07.2025",
  },
  {
    name: "Broccoli",
    image: "./images/broccoli.png",
    description: "Need %count% broccoli.",
    count: 1,
    priority: 0,
    deadline: "01.07.2025",
  },
];

let container = document.getElementsByClassName("container")[0];

container.innerHTML += `
  <div class="d-flex justify-content-between my-3">
    <h2 class="ms-1">Weekly Tasks</h2>
    <button type="button" class="btn">Sort by priority: <i class="bi bi-sort-up"></i></button>
  </div>
`;

let row = document.createElement("div");
row.classList.add(
  "row",
  "row-cols-lg-3",
  "row-cols-md-2",
  "row-cols-1",
  "justify-content-start",
  "g-5",
  "mb-4"
);
container.append(row);

updateItemLayout();

function getPriorityColorClass(priority) {
  if (priority < 2) {
    return "btn-success";
  } else if (priority < 4) {
    return "btn-warning";
  } else {
    return "btn-danger";
  }
}

function updateItemLayout() {
  row.innerHTML = "";

  items.forEach((item, i) => {
    let desc = item.description.replace("%count%", item.count);
    let priorityColorClass = getPriorityColorClass(item.priority);

    row.innerHTML += `
    <div class="col">
      <div class="card mx-md-1 mx-5">
        <div class="card-img-container">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Priority level: <button type="button" class="btn increase-priority-btn ${priorityColorClass}">${item.priority}</button></li>
          <li class="list-group-item">Deadline: ${item.deadline}</li>
        </ul>
        <div class="card-body d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-danger delete-btn">Delete</button>
          <button type="button" class="btn btn-success done-btn">Done</button>
        </div>
      </div>
    </div>
  `;
  });

  let deleteBtns = document.querySelectorAll(".delete-btn");
  let doneBtns = document.querySelectorAll(".done-btn");
  let increasePriorityBtns = document.querySelectorAll(
    ".increase-priority-btn"
  );

  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      items.splice(i, 1);
      updateItemLayout();
    });
  });

  doneBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      updateItemLayout();
    });
  });

  increasePriorityBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (items[i].priority < 5) {
        items[i].priority++;
        btn.innerHTML = items[i].priority;

        btn.classList.remove("btn-success", "btn-warning", "btn-danger");
        let colorClass = getPriorityColorClass(items[i].priority);
        btn.classList.add(colorClass);
      }
    });
  });
}
