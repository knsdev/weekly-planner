let items = [
  {
    name: "Breakfast",
    image: "./images/breakfast.jpg",
    description: "Have breakfast.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Lunch",
    image: "./images/cook-spaghetti.jpg",
    description: "Cook spaghetti, have lunch.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Dinner",
    image: "./images/dinner-whine.jpg",
    description: "Have dinner.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Banana",
    image: "./images/banana.jpg",
    description: "Buy %count% bananas.",
    count: 4,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Apple",
    image: "./images/apple.jpg",
    description: "Buy %count% apples.",
    count: 2,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Broccoli",
    image: "./images/broccoli.png",
    description: "Buy %count% broccoli.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Dishes",
    image: "./images/water-flow.jpg",
    description: "Do the dishes.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Nature",
    image: "./images/nature-lake.jpg",
    description: "Go outside in nature.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
  {
    name: "Coding",
    image: "./images/software-developer.jpg",
    description: "Practice coding in JavaScript.",
    count: 1,
    priority: 0,
    deadline: "07.06.2025",
    done: false,
  },
];

const SortingOrderType = Object.freeze({
  Ascending: 0,
  Descending: 1,
});

const sortingFunctions = [
  function (a, b) {
    if (a.priority > b.priority) return 1;
    else if (a.priority < b.priority) return -1;
    else return 0;
  },
  function (a, b) {
    if (a.priority > b.priority) return -1;
    else if (a.priority < b.priority) return 1;
    else return 0;
  },
];

let sortingOrder = SortingOrderType.Ascending;

document.body.innerHTML =
  `<header>
      <nav>
        <div class="p-2 bg-dark">
          <div class="container-fuid">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="./index.html" class="nav-link px-2 link-primary text-white logo"
                    ><i class="bi bi-list-check me-2"></i> My Planner</a
                  >
                </li>
                <li>
                  <a href="./index.html" class="nav-link px-2 link-secondary">Home</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-secondary">Tasks</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2 link-secondary">Settings</a>
                </li>
              </ul>
              <div class="dropdown text-end">
                <a href="#" class="d-block notification" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-bell-fill text-white"></i>
                </a>
                <ul class="dropdown-menu text-small">
                  <li><a class="dropdown-item" href="#">1</a></li>
                  <li><a class="dropdown-item" href="#">2</a></li>
                  <li><a class="dropdown-item" href="#">3</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">4</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <section class="hero">
        <div class="hero-container">
          <img src="./images/hero.jpg" class="hero-image" />
          <div class="hero-text">Weekly Planner</div>
        </div>
      </section>
      <section class="content">
        <div class="container" id="main-content-container"></div>
      </section>
    </main>
    <footer class="bg-dark">
      <div>
        <div class="py-3">
          <ul class="nav justify-content-center pb-3">
            <li class="nav-item">
              <a href="#" class="nav-link footer-icon-link"> <i class="bi bi-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link footer-icon-link"> <i class="bi bi-twitter"></i></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link footer-icon-link"> <i class="bi bi-google"></i></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link footer-icon-link"> <i class="bi bi-instagram"></i></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link footer-icon-link"> <i class="bi bi-linkedin"></i></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link footer-icon-link"> <i class="bi bi-github"></i></a>
            </li>
          </ul>
        </div>
        <div class="newsletter mb-5">
          <form>
            <p class="text-white text-center">Sign up for our newsletter</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="email" class="form-control" placeholder="Email address" />
              <button class="btn btn-outline-light" type="button">Subscribe</button>
            </div>
          </form>
        </div>
        <p class="text-center text-white">© 2025 Kim Niklas Schl&uuml;ter</p>
      </div>
    </footer>
` + document.body.innerHTML;

let container = document.getElementById("main-content-container");
container.innerHTML += `
  <div class="d-flex justify-content-between my-3">
    <h3 class="ms-1">Weekly Tasks</h3>
    <button type="button" id="sort-btn" class="btn">Sort by priority: <i class="bi bi-sort-up"></i></button>
  </div>
`;

let row = document.createElement("div");
row.classList.add("row", "row-cols-lg-3", "row-cols-md-2", "row-cols-1", "justify-content-start", "g-5", "mb-4");
container.append(row);

updateItemLayout();
updateSortingOrderIcon();
sortItems();

let sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", onSortButtonClicked);

function updateItemLayout() {
  row.innerHTML = "";

  items.forEach((item, i) => {
    let desc = item.description.replace("%count%", item.count);
    let priorityColorClass = getPriorityColorClass(item.priority);

    row.innerHTML += `
    <div class="col">
        <div class="card mx-md-1 mx-5 task">
          <div class="d-flex justify-content-between ms-3 mt-2">
            <button type="button" class="btn btn-info text-white">Task</button>
            <div>
              <button type="button" class="btn"><i class="bi bi-bookmark"></i></button>
              <button type="button" class="btn"><i class="bi bi-three-dots-vertical"></i></button>
            </div>
          </div>
          <div class="card-img-container">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
          </div>
          <div class="task-state">
            <img src="./images/check-mark.png" />
          </div>
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${desc}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="bi bi-exclamation-triangle-fill"></i> Priority level:
              <button type="button" class="btn increase-priority-btn ${priorityColorClass}">${item.priority}</button>
            </li>
            <li class="list-group-item">
              <i class="bi bi-calendar2-week"></i> Deadline: ${item.deadline}
            </li>
          </ul>
          <div class="card-body d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-danger delete-btn"><i class="bi bi-trash-fill"></i> Delete</button>
            <button type="button" class="btn btn-success done-btn"><i class="bi bi-check-circle"></i> Done</button>
          </div>
        </div>
    </div>
  `;
  });

  let increasePriorityBtns = document.querySelectorAll(".increase-priority-btn");
  let deleteBtns = document.querySelectorAll(".delete-btn");
  let doneBtns = document.querySelectorAll(".done-btn");
  let taskStates = document.getElementsByClassName("task-state");

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

  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      items.splice(i, 1);
      updateItemLayout();
    });
  });

  doneBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (!items[i].done) {
        items[i].done = true;
        taskStates[i].classList.add("task-state-done");
      }
    });
  });

  for (let i = 0; i < taskStates.length; i++) {
    if (items[i].done) {
      taskStates[i].classList.add("task-state-done");
    }
  }
}

function getPriorityColorClass(priority) {
  if (priority < 2) {
    return "btn-success";
  } else if (priority < 4) {
    return "btn-warning";
  } else {
    return "btn-danger";
  }
}

function onSortButtonClicked() {
  if (sortingOrder === SortingOrderType.Ascending) {
    sortingOrder = SortingOrderType.Descending;
  } else {
    sortingOrder = SortingOrderType.Ascending;
  }

  sortItems();
  updateSortingOrderIcon();
  updateItemLayout();
}

function sortItems() {
  items.sort(sortingFunctions[sortingOrder]);
}

function updateSortingOrderIcon() {
  let sortBtn = document.getElementById("sort-btn");
  let iconElement = sortBtn.getElementsByClassName("bi")[0];
  iconElement.classList.remove("bi-sort-up", "bi-sort-down");
  iconElement.classList.add(sortingOrder === SortingOrderType.Ascending ? "bi-sort-up" : "bi-sort-down");
}
