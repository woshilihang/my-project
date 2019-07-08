import _ from "lodash";

function createDiv() {
  let element = document.createElement("div");

  element.innerHTML = _join(["hello", "world"], ",");

  element.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(Print => {});

  return element;
}

document.body.appendChild(createDiv());
