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
      link.href = './fbd.html'; 
    });
  
    const languageLinks = document.querySelectorAll('a.Language');
    languageLinks.forEach(link => {
      link.href = './language.html'; 
    });
  
    const studyLinks = document.querySelectorAll('a.Study');
    studyLinks.forEach(link => {
      link.href = './study.html'; 
    });
  
    const projectLinks = document.querySelectorAll('a.Project');
    projectLinks.forEach(link => {
      link.href = './project.html'; 
    });
  
    const questionLinks = document.querySelectorAll('a.Question');
    questionLinks.forEach(link => {
      link.href = './question.html';
    });
  
    const supportLinks = document.querySelectorAll('a.Support');
    supportLinks.forEach(link => {
      link.href = './support.html'; 
    });

    const discordLinks = document.querySelectorAll('a.Discord');
    discordLinks.forEach(link => {
    link.href = 'https://discord.com/';
    });

    const githubLinks = document.querySelectorAll('a.GitHub');
    githubLinks.forEach(link => {
    link.href = 'https://github.com/jiho0419/web-programming-project';
    });

});
  

  
