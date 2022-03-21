const routesElement = document.querySelector(".route-pages");
const links = document.querySelectorAll(".route-link");
const routes = {
  "/": "src/pages/main-page/index.html",
  "/about": "src/pages/about-page/index.html",
  "/personal-cabinet": "src/pages/personal-cabinet-page/index.html"
};
async function renderRouteComponent() {
  const path = window.location.pathname;
  const componentLink = routes[path];
  const componentHTML = await fetch(componentLink).then(data => data.text());
  routesElement.innerHTML = componentHTML;
};
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  renderRouteComponent();
};
window.onpopstate = renderRouteComponent;
window.route = route;
// window.history.pushState({}, "", "/");
renderRouteComponent();