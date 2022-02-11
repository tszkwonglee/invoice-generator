const totalEL = document.getElementById("total");
const serviceBtn1 = document.getElementById("service-btn-1");
const serviceBtn2 = document.getElementById("service-btn-2");
const serviceBtn3 = document.getElementById("service-btn-3");
let removeLink1 = null;
let removeLink2 = null;
let removeLink3 = null;
const sendBtn = document.getElementById("send-btn");
const taskList = document.getElementById("task-list");

/* Services object*/
const service1 = { name: "Wash Car", price: 10 };
const service2 = { name: "Mow Lawn", price: 20 };
const service3 = { name: "Pull Weeds", price: 30 };

let currentServices = [];

/* Initial Rendering */
render();
// console.log(totalEL);

/* Rendering Functions */
function render() {
  renderTask();
  renderTotal();
  // addRemoveLinkListener();
}

function renderTotal() {
  let total = 0;

  for (let i = 0; i < currentServices.length; i++) {
    total += currentServices[i].price;
  }
  totalEL.textContent = `$${total}`;
}

function renderTask() {
  if (currentServices.length === 0) {
    taskList.innerHTML = `<div class="pricing-item"></div>`;
  } else {
    taskList.innerHTML = "";
    for (let i = 0; i < currentServices.length; i++) {
      if (currentServices[i] === service1) {
        taskList.innerHTML += `
        <div class="pricing-item">
          <div class="task">
            <h2>Wash Car</h2>
            <a id="remove-link-1" class="remove-link" href="#">Remove</a>
          </div>
          <p class="price-text-m">
            <span class="dollar-sign-gray">$</span>10
          </p>
        </div>`;
      } else if (currentServices[i] === service2) {
        taskList.innerHTML += `
        <div class="pricing-item">
          <div class="task">
            <h2>Mow Lawn</h2>
            <a id="remove-link-2" class="remove-link" href="#">Remove</a>
          </div>
          <p class="price-text-m">
            <span class="dollar-sign-gray">$</span>20
          </p>
        </div>`;
      } else {
        taskList.innerHTML += `
        <div class="pricing-item">
          <div class="task">
            <h2>Pull Weeds</h2>
            <a id="remove-link-3" class="remove-link" href="#">Remove</a>
          </div>
          <p class="price-text-m">
            <span class="dollar-sign-gray">$</span>30
          </p>
        </div>`;
      }
    }
  }
}

/* Remove Service from array */

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "remove-link-1") {
    clear(1);
  } else if (e.target && e.target.id == "remove-link-2") {
    clear(2);
  } else if (e.target && e.target.id == "remove-link-3") {
    clear(3);
  }
});

function clear(serviceNum) {
  // console.log("Enter Clear function");
  let index = 0;
  if (serviceNum === 1) {
    index = getElementIndex(currentServices, service1);
  } else if (serviceNum === 2) {
    index = getElementIndex(currentServices, service2);
  } else {
    index = getElementIndex(currentServices, service3);
  }

  if (index > -1) {
    currentServices.splice(index, 1);
  }
  render();
}

/* Helper Functions */
function getElementIndex(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return i;
    }
  }
}

/* Button Events */
serviceBtn1.addEventListener("click", function () {
  if (!currentServices.includes(service1)) {
    currentServices.push(service1);

    render();
  }
});

serviceBtn2.addEventListener("click", function () {
  if (!currentServices.includes(service2)) {
    currentServices.push(service2);
    render();
  }
});

serviceBtn3.addEventListener("click", function () {
  if (!currentServices.includes(service3)) {
    currentServices.push(service3);
    render();
  }
});

sendBtn.addEventListener("click", function () {
  currentServices = [];
  render();
});
