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
    projectName: 'Tonic',
    projectInfo: 'CANOPY',
    projectDev: 'Back End Dev',
    projectYear: '2015',
    projectImageURL: './images/SnapshootPortfolioE.svg',
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
  },
  {
    id: 2,
    projectName: 'Multi-Post Stories',
    projectInfo: 'FACEBOOK',
    projectDev: 'Full Stack Dev',
    projectYear: '2015',
    projectImageURL: './images/SnapshootPortfolioD.svg',
    projectDesc: 'Experiment content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
  },
  {
    id: 3,
    projectName: 'Facebook 360',
    projectInfo: 'FACEBOOK',
    projectDev: 'Full Stack Dev',
    projectYear: '2015',
    projectImageURL: './images/SnapshootPortfolioA.svg',
    projectDesc: 'Exploring the future of media in Facebook first Virtual Reality app a place to discover and enjoy 360 photos and videos on Gear VR.',
    projectLang1: 'html',
    projectLang2: 'css',
    projectLang3: 'javascript',
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
  const projectLiveBtn = document.createElement('button');
  projectLiveBtn.setAttribute('class', 'button');
  projectLiveBtn.setAttribute('type', 'button');
  projectLiveBtn.innerHTML = 'See Live <i class="fas fa-arrow-circle-right fa-lg"></i>';
  const projectSourceBtn = document.createElement('button');
  projectSourceBtn.setAttribute('class', 'button');
  projectSourceBtn.setAttribute('type', 'button');
  projectSourceBtn.innerHTML = 'See Source <i class="fab fa-github fa-lg"></i>';

  const closeBtnPop = document.createElement('i');
  closeBtnPop.className = 'fas fa-times';
  closeBtnPop.addEventListener('click', () => {
    const popup = document.querySelector('.project-pop');
    if (popup) {
      popup.parentElement.removeChild(popup);
    }
  });

  projectPop.append(projectContainer);
  projectContainer.append(projectName);
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
  projectButton.append(projectLiveBtn);
  projectButton.append(projectSourceBtn);
  return projectPop;
}

const body = document.querySelector('body');

body.querySelectorAll('.popUp-button').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (!document.querySelector('.project-pop')) {
      const popupData = projectData[parseInt(event.target.id, 10)];
      const popup = popUp(popupData);
      body.append(popup);
    }
  });
});