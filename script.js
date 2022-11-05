const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.toggle');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  toggleMenu.classList.toggle('active');
});

document.querySelectorAll('.toggle-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  toggleMenu.classList.remove('active');
}));

/*  POPUP-WINDOW  */

const projectData = [
  {
    id: 1,
    projectName: 'BookStore App',
    projectInfo: 'Bookstore Library',
    projectDev: 'Full Stack Dev',
    projectYear: '2022',
    projectImageURL: './images/bookstore.png',
    projectDesc: 'An online book store application built with react and redux. It allows users to add and remove books in different categories from their collection.',
    projectLang1: 'react',
    projectLang2: 'scss',
    projectLang3: 'redux',
    projectURL: 'https://bookstore-library-app.netlify.app/',
    projectSource: 'https://github.com/AbuRayhaan/Bookstore',
  },
  {
    id: 2,
    projectName: 'Fulus Bank App',
    projectInfo: 'A Simple Budget App',
    projectDev: 'Back End Dev',
    projectYear: '2022',
    projectImageURL: './images/FulusApp.png',
    projectDesc: 'A budget app that helps to organize and keep track of budgets.',
    projectLang1: 'Ruby on Rails',
    projectLang2: 'PostgreSQL',
    projectLang3: 'Heroku',
    projectURL: 'https://dry-atoll-56266.herokuapp.com/',
    projectSource: 'https://github.com/AbuRayhaan/Bank-App',
  },
  {
    id: 3,
    projectName: 'VIBRANT YOUTH SUMMIT',
    projectInfo: 'VIABLE',
    projectDev: 'Full Stack Dev',
    projectYear: '2022',
    projectImageURL: './images/viable-d.png',
    projectDesc: 'A global network platform for Software Developers to share opportunities and a create a positive change with people from over 80 countries.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
    projectURL: 'https://aburayhaan.github.io/Viable-Project/',
    projectSource: 'https://github.com/AbuRayhaan/Viable-Project',
  },
  {
    id: 4,
    projectName: 'Global Holiday',
    projectInfo: 'Global Holiday App for 251 Countries.',
    projectDev: 'Full Stack Dev',
    projectYear: '2022',
    projectImageURL: './images/global-holiday.png',
    projectDesc: 'A Global Holiday Metric App that provides holiday data for 251 countries on the globe.',
    projectLang1: 'React/Redux',
    projectLang2: 'SCSS',
    projectLang3: 'API',
    projectURL: 'https://global-holiday-app.netlify.app/',
    projectSource: 'https://github.com/AbuRayhaan/global-holiday-metrics-app',
  },
  {
    id: 5,
    projectName: 'SPACE TRAVELLERS HUB',
    projectInfo: 'SPACE',
    projectDev: 'Full Stack Dev',
    projectYear: '2022',
    projectImageURL: './images/space.png',
    projectDesc: 'The Space Travelers hub is an application that allows adventurers to make custom reservations of rockets and dragons for space travel. Also, users have an opportunity to select a mission of their choice.',
    projectLang1: 'React/Redux',
    projectLang2: 'SCSS',
    projectLang3: 'API',
    projectURL: 'https://space-traveller-app.netlify.app/',
    projectSource: 'https://github.com/AbuRayhaan/Space-Travellers-Hub',
  },
  {
    id: 6,
    projectName: 'To Do List App',
    projectInfo: 'Daily Activity Tracker',
    projectDev: 'Back End Dev',
    projectYear: '2022',
    projectImageURL: './images/toDoApp.png',
    projectDesc: 'A daily activity tracking application that helps to organize your daily tasks and keep track of tasks that have been completed, or yet to be completed.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
    projectURL: 'https://aburayhaan.github.io/To-Do-List/',
    projectSource: 'https://github.com/AbuRayhaan/To-Do-List',
  },
  {
    id: 7,
    projectName: 'Cubis App',
    projectInfo: 'A Meal application for end users.',
    projectDev: 'Back End Dev',
    projectYear: '2022',
    projectImageURL: './images/cubis-desktop.png',
    projectDesc: 'An application that allows users to find meal ideas they can make simply with the ingredients they have. Developed with an external API (https://www.themealdb.com/), using JavaScript language. We used development tools like Kanban, webpack and Jest-test.',
    projectLang1: 'Javascript',
    projectLang2: 'CSS',
    projectLang3: 'API',
    projectURL: 'https://jolly-otter-7d885a.netlify.app/',
    projectSource: 'https://github.com/AbuRayhaan/Cubis',
  },
];

/*  POPUP-WINDOW  */

const work = document.querySelector('#work');

for (let i = 0; i < projectData.length; i += 1) {
  work.innerHTML += `<ul class="project-works">
  <li class="project-image-container">
    <img src="${projectData[i].projectImageURL}" alt="Tonic" class="mobile-image">
  </li>

  <li class="project-body-block">
    <h2 class="project-title">${projectData[i].projectName}</h2>
    <div class="project-info">
      <span class="project-info-items canopy">${projectData[i].projectInfo}</span>
      <img src="./images/Counter.svg" alt="counter">
      <span class="project-info-items">${projectData[i].projectDev}</span>
      <img src="./images/Counter.svg" alt="counter">
      <span class="project-info-items">${projectData[i].projectYear}</span>
    </div>
    <p class="project-primary-text">${projectData[i].projectDesc}</p>
    <ul class="tags">
      <li class="tag">${projectData[i].projectLang1}</li>
      <li class="tag">${projectData[i].projectLang2}</li>
      <li class="tag">${projectData[i].projectLang3}</li>
    </ul>
    <button class="button popUp-button" data-id="3" type="button">See Project</button>
  </li>
</ul>`;
}

function popUp(popUpData) {
  const projectPop = document.createElement('div');
  projectPop.setAttribute('class', 'project-pop');
  projectPop.setAttribute('id', 'project-pop');
  const projectContainer = document.createElement('div');
  projectContainer.setAttribute('class', 'project-container');
  const projectName = document.createElement('h2');
  projectName.setAttribute('class', 'project-name');
  projectName.innerHTML = popUpData.projectName;
  const projectTech = document.createElement('div');
  projectTech.setAttribute('class', 'project-tech');
  const projectInfo = document.createElement('p');
  projectInfo.setAttribute('class', 'project-info');
  projectInfo.innerHTML = popUpData.projectInfo;
  const projectSpan = document.createElement('span');
  projectSpan.innerHTML = '•';
  const projectDevType = document.createElement('p');
  projectDevType.setAttribute('class', 'project-dev');
  projectDevType.innerHTML = popUpData.projectDev;
  const projectSpan2 = document.createElement('span');
  projectSpan2.innerHTML = '•';
  const projectYear = document.createElement('p');
  projectYear.setAttribute('class', 'project-year');
  projectYear.innerHTML = popUpData.projectYear;
  const projectImageContainer = document.createElement('div');
  projectImageContainer.setAttribute('class', 'popup-image');
  const projectPopImage = document.createElement('img');
  projectPopImage.setAttribute('src', popUpData.projectImageURL);
  projectPopImage.setAttribute('alt', 'project-image');
  projectPopImage.setAttribute('class', 'popup-img');
  const projectDesc = document.createElement('p');
  projectDesc.setAttribute('class', 'project-desc');
  projectDesc.innerHTML = popUpData.projectDesc;
  const projectLang = document.createElement('div');
  projectLang.setAttribute('class', 'lang-container');
  const projectLangItem1 = document.createElement('p');
  projectLangItem1.setAttribute('class', 'project-lang');
  projectLangItem1.innerHTML = popUpData.projectLang1;
  const projectLangItem2 = document.createElement('p');
  projectLangItem2.setAttribute('class', 'project-lang');
  projectLangItem2.innerHTML = popUpData.projectLang2;
  const projectLangItem3 = document.createElement('p');
  projectLangItem3.setAttribute('class', 'project-lang');
  projectLangItem3.innerHTML = popUpData.projectLang3;
  const projectButton = document.createElement('div');
  projectButton.setAttribute('class', 'project-button');
  const span = document.createElement('hr');
  span.setAttribute('class', 'line-span');
  const aLiveBtn = document.createElement('a');
  aLiveBtn.setAttribute('href', popUpData.projectURL);
  const projectLiveBtn = document.createElement('button');
  projectLiveBtn.setAttribute('class', 'button');
  projectLiveBtn.setAttribute('type', 'button');
  projectLiveBtn.setAttribute('onclick', 'location.href = popUpData.projectURL');
  projectLiveBtn.innerHTML = 'See Live <i class="fas fa-arrow-circle-right fa-lg"></i>';
  const aSourceBtn = document.createElement('a');
  aSourceBtn.setAttribute('href', popUpData.projectSource);
  const projectSourceBtn = document.createElement('button');
  projectSourceBtn.setAttribute('class', 'button');
  projectSourceBtn.setAttribute('type', 'button');
  projectSourceBtn.innerHTML = 'See Source <i class="fa-brands fa-github"></i>';

  const closeBtnPop = document.createElement('i');
  closeBtnPop.className = 'fa-solid fa-xmark';
  closeBtnPop.addEventListener('click', () => {
    const popup = document.querySelector('.project-pop');
    if (popup) {
      popup.parentElement.removeChild(popup);
    }
  });

  projectPop.append(projectContainer);
  projectContainer.append(projectName);
  projectContainer.append(closeBtnPop);
  projectContainer.append(projectTech);
  projectTech.append(projectInfo);
  projectTech.append(projectSpan);
  projectTech.append(projectDevType);
  projectTech.append(projectSpan2);
  projectTech.append(projectYear);
  projectContainer.append(projectImageContainer);
  projectImageContainer.append(projectPopImage);
  projectContainer.append(projectDesc);
  projectContainer.append(projectLang);
  projectLang.append(projectLangItem1);
  projectLang.append(projectLangItem2);
  projectLang.append(projectLangItem3);
  projectContainer.append(span);
  projectContainer.append(projectButton);
  projectButton.append(aLiveBtn);
  aLiveBtn.append(projectLiveBtn);
  projectButton.append(aSourceBtn);
  aSourceBtn.append(projectSourceBtn);
  return projectPop;
}

const body = document.querySelector('body');
const popUpBtn = document.querySelectorAll('.popUp-button');

popUpBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const popupData = projectData[i];
    const popup = popUp(popupData);
    body.append(popup);
  });
});

/*  Client-Side Validation  */
const form = document.querySelector('.contact-form');
const text = document.querySelector('#loginError');
form.addEventListener('submit', (event) => {
  const emailValue = form.elements.usermail.value;
  if ((emailValue.toLowerCase() !== emailValue)) {
    event.preventDefault();
    text.classList.add('active');
    text.innerHTML = 'Please enter email adress in lowercase';
  } else {
    form.submit();
  }
});