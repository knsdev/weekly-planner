const items = [
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
  <div class="d-flex justify-content-between">
    <h2>Weekly Tasks</h2>
    <button type="button" class="btn">Sort by priority: <i class="bi bi-sort-up"></i></button>
  </div>
`;

let row = document.createElement("div");
row.classList.add(
  "row",
  "row-cols-lg-3",
  "row-cols-md-2",
  "row-cols-1",
  "justify-content-between"
);
container.append(row);

items.forEach((item, i) => {
  let desc = item.description.replace("%count%", item.count);
  let priorityColorClass;

  if (item.priority < 2) {
    priorityColorClass = "btn-success";
  } else if (item.priority < 4) {
    priorityColorClass = "btn-warning";
  } else {
    priorityColorClass = "btn-danger";
  }

  row.innerHTML += `
    <div class="col p-xxl-5 p-xl-4 p-lg-3 p-md-3 p-4">
      <div class="card mx-md-1 mx-5">
        <div class="card-img-container">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Priority level: <button type="button" class="btn ${priorityColorClass}">${item.priority}</button></li>
          <li class="list-group-item">Deadline: ${item.deadline}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  `;
});
