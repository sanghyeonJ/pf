const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    // 옵셔널 체이닝 - storageDate 뒤에 ?를 붙임으로 storageDate가 정상적인 값이 아닐경우 complete키를 찾지않는다 (신규 데이터 입력시 오류발생 방지)
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#locationNameTag");
  locationNameTag.textContent = location;
  console.log(weather);
  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;
  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=704eace40c4dc9ff0bedb71a489acecf`
  )
    .then((res) => {
      return res.json(); // JSON.parse() 는 response에 header가 존재하면 사용할수없다
    })
    .then((json) => {
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      //then 과 같이사용하며 error가 발생시 적용
      console.log(err);
    });
};

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  // shorthand property - 객체의 key와 value가 같으면 콜론을 생략할수있다
  const positionObj = {
    latitude,
    longitude,
  };

  weatherSearch(positionObj);
};
const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};
askForLocation();
if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
// const promiseTest = function () {
//   return new Promise((resolver, reject) => {
//     setTimeout(() => {
//       resolver(100);
//       //reject("error");
//     }, 2000);
//   });
// };
// promiseTest().then((res) => {
//   console.log(res);
// });
