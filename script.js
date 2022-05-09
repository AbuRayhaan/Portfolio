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
    projectName: 'To Do List App',
    projectInfo: 'Daily Activity Tracker',
    projectDev: 'Back End Dev',
    projectYear: '2022',
    projectImageURL: './images/toDo.png',
    projectDesc: 'A daily activity tracking application that helps to organize your daily tasks and keep track of tasks that have been completed, or yet to be completed.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
    projectURL: 'https://aburayhaan.github.io/To-Do-List/',
    projectSource: 'https://github.com/AbuRayhaan/To-Do-List',
  },
  {
    id: 2,
    projectName: 'VIBRANT YOUTH SUMMIT',
    projectInfo: 'VIABLE',
    projectDev: 'Full Stack Dev',
    projectYear: '2022',
    projectImageURL: './images/viable.png',
    projectDesc: 'A global network platform for Software Developers to share opportunities and a create a positive change with people from over 80 countries.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
    projectURL: 'https://aburayhaan.github.io/Viable-Project/',
    projectSource: 'https://github.com/AbuRayhaan/Viable-Project',
  },
  {
    id: 3,
    projectName: 'AWESOME BOOKS',
    projectInfo: 'LIBRARY',
    projectDev: 'Full Stack Dev',
    projectYear: '2022',
    projectImageURL: './images/awesome.png',
    projectDesc: 'An online library for adding and removing books from a user collection, it helps to keep track of the books users have read and the unread books.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
    projectURL: 'https://aburayhaan.github.io/Awesome-Book/',
    projectSource: 'https://github.com/AbuRayhaan/Awesome-Book',
  },
  {
    id: 4,
    projectName: 'Uber Navigation',
    projectInfo: 'Uber',
    projectDev: 'Lead Developer',
    projectYear: '2018',
    projectImageURL: './images/SnapshootPortfolioB.svg',
    projectDesc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
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