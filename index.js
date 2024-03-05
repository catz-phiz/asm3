'use strict';
const contactInput = document.querySelector('.contact__input');
const contactBtn = document.querySelector('.contact__btn');
const contactDesc = document.querySelectorAll('.contact__desc');
const personalInfo = document.querySelector('#personal-info');
const contactInfo = document.querySelector('.contact-info');
const jobItems = document.querySelectorAll('.job__item');
const jobBody = document.querySelectorAll('.job__body');
const jobViewmore = document.querySelectorAll('.job__viewmore');
const jobViewless = document.querySelectorAll('.job__viewless');


// Email validation regex
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

contactBtn.addEventListener('click', () => {
  if (regex.test(contactInput.value)) {
    personalInfo.classList.remove('hide');
    contactInfo.classList.add('hide');
  } else {
    contactDesc[0].classList.add('hide');
    contactDesc[1].classList.remove('hide');
  }
});

const hideElement = (e) => {
  if(!e.classList.contains('hide')) {
    e.classList.add('hide');
  }
}

const showElement = (e) => {
  if(e.classList.contains('hide')) {
    e.classList.remove('hide');
  }
}


// Job viewmore and viewless
for(let i = 0; i < jobViewmore.length; i++) {
  //Hover job items
  jobItems[i].addEventListener('mouseover', () => {
    if(jobViewless[i].classList.contains('hide')) showElement(jobViewmore[i])
  })

  jobItems[i].addEventListener('mouseout', () => {
      hideElement(jobViewmore[i]);
  })

  //Show hide job items
  jobViewmore[i].addEventListener('click', () => {
    hideElement(jobViewmore[i]);
    showElement(jobViewless[i]);
    showElement(jobBody[i]);
  });

  jobViewless[i].addEventListener('click', () => {
    hideElement(jobViewless[i]);
    hideElement(jobBody[i]);
    showElement(jobViewmore[i]);
  });
}


