var elModalToggler = document.querySelector('.site-header__search-button');
var elModal = document.querySelector('.site-header');
var elModalClose = document.querySelector('.site-header--open');

elModalToggler.addEventListener('click', function () {
  elModal.classList.toggle('site-header--open');
});

/* Videos JS */
/* Funksiya Yaratib olyabmiz */
let $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

let $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

let createElement = function (element, elementClass, text) {
  let newElement = document.createElement(element);
  if (elementClass) {
    newElement.setAttribute("class", elementClass);
  }
  if (text) {
    newElement.textContent = text;
  }
  return newElement;
};

/* Obyektlar yaratamiz */
let recommendedVideos = [
  {
    id: "a023",
    img: "/img/dude.jpg",
    srcset: "/img/dude.jpg 1x, /img/dude@2x.jpg 2x",
    duration: "3:40",
    info: "34k views  ·  5 months ago",
    author: "Dollie Blair",
    title: "Dude You Re Getting A Telescope"
  },
  {
    id: "b002",
    img: "/img/gazing.jpg",
    srcset: "/img/gazing.jpg 1x, /img/gazing@2x.jpg 2x",
    duration: "4:15",
    info: "80k views  ·  3 days ago",
    author: "Dollie Blai",
    title: "Moon Gazing"
  },
  {
    id: "c003",
    img: "/img/rose.jpg",
    srcset: "/img/rose.jpg 1x, /img/rose@2x.jpg 2x",
    duration: "4:15",
    info: "80k views  ·  3 days ago",
    author: "Dollie Blai",
    title: "A Brief History Of Creation"
  }
]

var elRecomendedVideosList  = $_(".js-main-videos__recommended-list")
var elRecommendedVideoTemplate = $_(".js-template",document).content;
var elRecommendedVideoFragment  = document.createDocumentFragment()
recommendedVideos.forEach((video,index)=> {
  var elCloneVideoTemplate = elRecommendedVideoTemplate.cloneNode(true);
  $_(".js-main-videos__img-recommended",elCloneVideoTemplate).src = video.img;
  $_(".js-main-videos__img-recommended",elCloneVideoTemplate).setAttribute("srcset", video.srcset);
  $_(".js-main-videos__time-recommended",elCloneVideoTemplate).textContent = video.duration;
  $_(".js-main-videos__title",elCloneVideoTemplate).textContent = video.title;
  $_(".js-main-videos__info",elCloneVideoTemplate).textContent = video.info;
  $_(".js-main-videos__author",elCloneVideoTemplate).textContent = video.author;
  elRecommendedVideoFragment.appendChild(elCloneVideoTemplate)
})
elRecomendedVideosList.appendChild(elRecommendedVideoFragment);