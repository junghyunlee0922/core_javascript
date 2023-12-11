function earth() {
  let water = true;

  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };

  let gravity = 10;

  return function (value) {
    gravity = value;
  };
}

const ufo = earth();

// ufo(1);

const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = "orange";
    } else {
      document.body.style.background = "white";
    }

    isClicked = !isClicked;
  };
})();

// button.addEventListener("click", handleClick);

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return read;
}

const b = useState(true);
