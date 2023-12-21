/* 화분 클릭시 nav바 내려오가*/
document.addEventListener('DOMContentLoaded', function () {
    const potPicture = document.querySelector('.pot-picture');
    const subMenu = document.querySelector('#sub-menu');

    potPicture.addEventListener('click', function (event) {
        event.preventDefault();
        subMenu.classList.toggle('sub-menu-open');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.pot')) {
            subMenu.classList.remove('sub-menu-open');
        }
    });
});


/*a 태그 연결 주소*/

document.addEventListener('DOMContentLoaded', function () {
  const webLinks = document.querySelectorAll('a.Web');
  webLinks.forEach(link => {
    link.href = './fbdWeb.html'; 
  });

  const languageLinks = document.querySelectorAll('a.Language');
  languageLinks.forEach(link => {
    link.href = './fbdLanguage.html'; 
  });

  const studyLinks = document.querySelectorAll('a.Study');
  studyLinks.forEach(link => {
    link.href = './fbdStudy.html'; 
  });

  const projectLinks = document.querySelectorAll('a.Project');
  projectLinks.forEach(link => {
    link.href = './fbdProject.html'; 
  });

  const questionLinks = document.querySelectorAll('a.Question');
  questionLinks.forEach(link => {
    link.href = './fbdQuestion.html';
  });

  const supportLinks = document.querySelectorAll('a.Support');
  supportLinks.forEach(link => {
    link.href = './fbdSupport.html'; 
  });

  const discordLinks = document.querySelectorAll('a.Discord');
  discordLinks.forEach(link => {
  link.href = 'https://discord.com/';
  });

  const githubLinks = document.querySelectorAll('a.GitHub');
  githubLinks.forEach(link => {
  link.href = 'https://github.com/jiho0419/web-programming-project';
  });

  const instagramIconLinks = document.querySelectorAll('a.instagramIcon');
  instagramIconLinks.forEach(link => {
  link.href = 'https://www.instagram.com/';
  });

  const facebookIconLinks = document.querySelectorAll('a.facebookIcon');
  facebookIconLinks.forEach(link => {
  link.href = 'https://www.facebook.com/';
  });

  const youtubeIconLinks = document.querySelectorAll('a.youtubeIcon');
  youtubeIconLinks.forEach(link => {
  link.href = 'https://www.youtube.com/';
  });

  const twitterIconLinks = document.querySelectorAll('a.twitterIcon');
  twitterIconLinks.forEach(link => {
  link.href = 'https://www.twitter.com/';
  });

  const githubIconLinks = document.querySelectorAll('a.githubIcon');
  githubIconLinks.forEach(link => {
  link.href = 'https://github.com/jiho0419/web-programming-project';
  });

  const discordIconLinks = document.querySelectorAll('a.discordIcon');
  discordIconLinks.forEach(link => {
  link.href = 'https://www.discord.com/';
  });
});


document.addEventListener('DOMContentLoaded', function() {
var instagramIcon = document.querySelector('.instagramIcon');
var facebookIcon = document.querySelector('.facebookIcon');
var youtubeIcon = document.querySelector('.youtubeIcon');
var twitterIcon = document.querySelector('.twitterIcon');
var githubIcon = document.querySelector('.githubIcon');
var discordIcon = document.querySelector('.discordIcon');

instagramIcon.style.backgroundImage = "url('./FBD_instagram.jpg')";

facebookIcon.style.backgroundImage = "url('./FBD_facebook.png')";

youtubeIcon.style.backgroundImage = "url('./FBD_youtube.png')";

twitterIcon.style.backgroundImage = "url('./FBD_twitter.png')";

githubIcon.style.backgroundImage = "url('./FBD_github.png')";

discordIcon.style.backgroundImage = "url('./FBD_discord.png')";
});


/* search bar */ 
const toDoForm = document.querySelector('#search-form');
const toDoInput = toDoForm.querySelector('.search-bar');
const toDoList = document.querySelector('#search-list');
const submitBtn = document.getElementById('submit-btn');
const txt = document.querySelector('.txt');
const TODOS_KEY = "todos";

let toDos = new Array();

function saveToDos() {
  typeof(Storage) !== 'undefined' && localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  updateTxtVisibility();
  saveToDos();
}

function paintToDo(newTodo) {
  const { id, text } = newTodo;
  const item = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  item.id = id;
  span.innerText = text;
  span.style.fontSize = "28px";
  span.style.marginRight = "5px";
  button.innerText = '❌';
  button.style.fontSize = "16px"
  button.addEventListener("click", deleteToDo);
  item.appendChild(span);
  item.appendChild(button);
  toDoList.appendChild(item);
  updateTxtVisibility();
}

function updateTxtVisibility() {
  txt.innerText = toDos.length === 0 ? '최근 검색어 내역이 없습니다.' : ''; // 이 부분을 추가합니다.
  txt.style.display = toDos.length === 0 ? 'block' : 'none';
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodoItem = toDoInput.value.trim();
  if (newTodoItem === '') {
    return; 
  }
  toDoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodoItem
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
if (savedToDos !== null) {
  toDos = savedToDos;
  savedToDos.forEach(paintToDo);
}

submitBtn.addEventListener('click', function() {
  handleToDoSubmit(new Event('submit'));
});

// 초기 로딩 시에도 업데이트
updateTxtVisibility();



/*날씨 API*/
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'f4452fec3b5cbd886981a56c964e1b9b';
    const weatherInfoElement = document.getElementById('weather-info');
    const weatherTitleElement = document.getElementById('weather-title');
    const cityInfoElement = document.getElementById('city-info');
    const temperatureInfoElement = document.getElementById('temperature-info');
    const weatherIconElement = document.getElementById('icon-info');
  
    async function getWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
  
            displayWeather(data);
        } catch (error) {
            console.error('날씨 정보를 가져오는 데 실패했습니다.', error);
            weatherInfoElement.innerHTML = '날씨 정보를 가져오는 데 실패했습니다.';
        }
    }
  
    function displayWeather(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const weatherIcon = getWeatherIcon(data.weather[0].icon);
  
        weatherTitleElement.innerText = `현재 ${cityName} 날씨`;
  
        cityInfoElement.innerHTML = `도시: ${cityName}<br>`;
        temperatureInfoElement.innerText = `온도: ${temperature} °C`;
  
        weatherIconElement.innerHTML = `${weatherIcon}`;
    }
  
    function getWeatherIcon(iconCode) {
        switch (iconCode) {
            case '01d':
            case '01n':
                return '<i class="fas fa-sun"></i>';
            case '02d':
            case '02n':
                return '<i class="fas fa-cloud-sun"></i>';
            case '03d':
            case '03n':
                return '<i class="fas fa-cloud"></i>';
            case '04d':
            case '04n':
                return '<i class="fas fa-cloud-meatball"></i>';
            case '09d':
            case '09n':
                return '<i class="fas fa-cloud-showers-heavy"></i>';
            case '10d':
            case '10n':
                return '<i class="fas fa-cloud-rain"></i>';
            case '11d':
            case '11n':
                return '<i class="fas fa-bolt"></i>';
            case '13d':
            case '13n':
                return '<i class="fas fa-snowflake"></i>';
            case '50d':
            case '50n':
                return '<i class="fas fa-smog"></i>';
            default:
                return '';
        }
    }
  
    getWeather('Seoul');
  });