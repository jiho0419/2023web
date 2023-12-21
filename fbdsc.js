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

    const webhtmlLinks = document.querySelectorAll('a.WebHtml');
    webhtmlLinks.forEach(link => {
      link.href = './fbdWebHtml.html'; 
    });

    const webhstudyLinks = document.querySelectorAll('a.WebHStudy');
    webhstudyLinks.forEach(link => {
      link.href = './fbdWebHStudy.html'; 
    });

    const webhtipLinks = document.querySelectorAll('a.WebHTip');
    webhtipLinks.forEach(link => {
      link.href = './fbdWebHTip.html'; 
    });
    
    const webcssLinks = document.querySelectorAll('a.WebCss');
    webcssLinks.forEach(link => {
      link.href = './fbdWebCss.html'; 
    });

    const webjavascriptLinks = document.querySelectorAll('a.WebJavaScript');
    webjavascriptLinks.forEach(link => {
      link.href = './fbdWebJavaScript.html'; 
    });

    const webreactLinks = document.querySelectorAll('a.WebReact');
    webreactLinks.forEach(link => {
      link.href = './fbdWebReact.html'; 
    });
  
    
    const languageLinks = document.querySelectorAll('a.Language');
    languageLinks.forEach(link => {
      link.href = './fbdLanguage.html'; 
    });
    
    const languagecLinks = document.querySelectorAll('a.LanguageC');
    languagecLinks.forEach(link => {
      link.href = './fbdLanguageC.html'; 
    });
    const languagejavaLinks = document.querySelectorAll('a.LanguageJava');
    languagejavaLinks.forEach(link => {
      link.href = './fbdLanguageJava.html'; 
    });
    const languagepythonLinks = document.querySelectorAll('a.LanguagePython');
    languagepythonLinks.forEach(link => {
      link.href = './fbdLanguagePython.html'; 
    });


    const studyLinks = document.querySelectorAll('a.Study');
    studyLinks.forEach(link => {
      link.href = './fbdStudy.html'; 
    });

    const studyfgLinks = document.querySelectorAll('a.StudyFG');
    studyfgLinks.forEach(link => {
      link.href = './fbdStudyFG.html'; 
    });

    const studymsLinks = document.querySelectorAll('a.StudyMS');
    studymsLinks.forEach(link => {
      link.href = './fbdStudyMS.html'; 
    });


    const projectLinks = document.querySelectorAll('a.Project');
    projectLinks.forEach(link => {
      link.href = './fbdProject.html'; 
    });

    const projectfgLinks = document.querySelectorAll('a.ProjectFG');
    projectfgLinks.forEach(link => {
      link.href = './fbdProjectFG.html'; 
    });

    const projectmsLinks = document.querySelectorAll('a.ProjectMS');
    projectmsLinks.forEach(link => {
      link.href = './fbdProjectMS.html'; 
    });


    const questionLinks = document.querySelectorAll('a.Question');
    questionLinks.forEach(link => {
      link.href = './fbdQuestion.html';
    });

    const questioncodeLinks = document.querySelectorAll('a.QuestionCode');
    questioncodeLinks.forEach(link => {
      link.href = './fbdQuestionCode.html';
    });

    const questionetcLinks = document.querySelectorAll('a.QuestionEtc');
    questionetcLinks.forEach(link => {
      link.href = './fbdQuestionEtc.html';
    });
    

    const supportLinks = document.querySelectorAll('a.Support');
    supportLinks.forEach(link => {
      link.href = './fbdSupport.html'; 
    });

    const supportanLinks = document.querySelectorAll('a.SupportAn');
    supportanLinks.forEach(link => {
      link.href = './fbdSupportAn.html'; 
    });

    const supporterrorLinks = document.querySelectorAll('a.SupportError');
    supporterrorLinks.forEach(link => {
      link.href = './fbdSupportError.html'; 
    });

    const supportetcLinks = document.querySelectorAll('a.SupportEtc');
    supportetcLinks.forEach(link => {
      link.href = './fbdSupportEtc.html'; 
    });


    const discordLinks = document.querySelectorAll('a.Discord');
    discordLinks.forEach(link => {
    link.href = 'https://discord.com/';
    });

    const githubLinks = document.querySelectorAll('a.GitHub');
    githubLinks.forEach(link => {
    link.href = 'https://github.com/jiho0419/web-programming-project';
    });

    const youtubeLinks = document.querySelectorAll('a.Youtube');
    youtubeLinks.forEach(link => {
    link.href = 'https://www.youtube.com/';
    });

    const gathertownLinks = document.querySelectorAll('a.GatherTown');
    gathertownLinks.forEach(link => {
    link.href = 'https://www.gather.town//';
    });

    const googlemeetLinks = document.querySelectorAll('a.GoogleMeet');
    googlemeetLinks.forEach(link => {
    link.href = 'https://apps.google.com/intl/ko/intl/ko_ALL/meet/';
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


