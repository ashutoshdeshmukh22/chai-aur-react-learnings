function customRender(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (let i = 0; i < Object.keys(element.props).length; i++) {
    const prop = Object.keys(element.props)[i];
    domElement.setAttribute(prop, element.props[prop]);
    console.log(prop, element.props[prop]);
  }
  //   for (let prop in container.props) {
  //     if (prop === "children") continue;
  //     console.log(prop, element.props[prop]);
  //     domElement.setAttribute(prop, element.props[prop]);
  //   }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://reactjs.org",
    target: "_blank",
  },
  children: "Click me to learn React",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
