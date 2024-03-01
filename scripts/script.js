// autoscroll skills-scroller.

const container = document.querySelector(".skills-scroller");
const scrollSpeed = 100;

function scrollContent(direction = 1) {
  if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
    container.scrollLeft += direction;
  } else {
    container.scrollLeft = 0;
  }
}

var scrollInterval = setInterval(scrollContent, 1000 / scrollSpeed);

// autoscroll projects-container

const projectscontainer = document.querySelector(".projects-container");
const projectsscrollinterval = 9000;
var userScrolling = false;
var timeout;

function scrollContenty(direction = 1) {
  if (
    projectscontainer.scrollTop <
      projectscontainer.scrollHeight - projectscontainer.clientHeight &&
    estaEnViewport(projectscontainer)
  ) {
    projectscontainer.scrollTop += direction * 400;
  } else {
    projectscontainer.scrollTop = 0;
  }
}

projectscontainer.addEventListener("scroll", () => {
  userScrolling = true;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    userScrolling = false;
  }, 500);
});

var projectsscrollInterval = setInterval(() => {
  if (!userScrolling) scrollContenty();
}, projectsscrollinterval);

// addEventListener to sidenav

function estaEnViewport(elemento) {
  var rect = elemento.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight + 300
  );
}

const as = document.querySelectorAll(".sidenav a");
document.addEventListener("scroll", () => {
  as.forEach((element) => {
    const section = document.querySelector(element.href.match(/#(.*)/));
    if (estaEnViewport(section)) {
      element.dataset.current = true;
    } else {
      element.dataset.current = false;
    }
  });
});
