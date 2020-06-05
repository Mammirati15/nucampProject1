// local Storage- store input
/*
const inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);

const inputBusinessName= document.getElementById("businessName");
localStorage.setItem("businessName", inputText.value);

const inputEin= document.getElementById("ein");
localStorage.setItem("ein", inputText.value);

const inputTextArea= document.getElementById("textArea");
localStorage.setItem("textArea", inputText.value);


// local Storage - get input
const storedValueEmail = localStorage.getItem("email");
const storedValueBusinessName = localStorage.getItem("businessName");
const storedValueEin = localStorage.getItem("ein");
const storedValueTextArea = localStorage.getItem("textArea");
*/

document.getElementById("fiveguys").onclick = function () {
  location.href = "https://www.fiveguys.com";
};

document.getElementById("portillos").onclick = function () {
  location.href = "https://www.portillos.com";
};

document.getElementById("chillis").onclick = function () {
  location.href = "https://www.chillis.com";
};

document.getElementById("apple").onclick = function () {
  location.href = "https://www.applebees.com";
};

document.getElementById("tgif").onclick = function () {
  location.href = "https://www.tgifridays.com";
};

document.getElementById("chipotle").onclick = function () {
  location.href = "https://www.chipotle.com";
};

document.getElementById("bw3").onclick = function () {
  location.href = "https://www.buffalowildwings.com";
};
document.getElementById("rosebud").onclick = function () {
  location.href = "https://www.therosebudcafe.com";
};

document.getElementById("giopza").onclick = function () {
  location.href = "https://www.giordanos.com";
};

const dimensions = {
  chillis: {
    normal: {
      height: 251,
      width: 201,
    },
    focused: {
      height: 276,
      width: 226,
    },
  },
  fiveguys: {
    normal: {
      height: 122,
      width: 122,
    },
    focused: {
      height: 222,
      width: 222,
    },
  },
  portillos: {
    normal: {
      height: 225,
      width: 225,
    },
    focused: {
      height: 244,
      width: 244,
    },
  },
  apple: {
    normal: {
      height: 225,
      width: 225,
    },
    focused: {
      height: 250,
      width: 250,
    },
  },
  tgif: {
    normal: {
      height: 186,
      width: 271,
    },
    focused: {
      height: 211,
      width: 296,
    },
  },
  chipotle: {
    normal: {
      height: 192,
      width: 262,
    },
    focused: {
      height: 217,
      width: 287,
    },
  },
  bw3: {
    normal: {
      height: 225,
      width: 225,
    },
    focused: {
      height: 250,
      width: 250,
    },
  },
  rosebud: {
    normal: {
      height: 223,
      width: 226,
    },
    focused: {
      height: 248,
      width: 251,
    },
  },
  giopza: {
    normal: {
      height: 169,
      width: 298,
    },
    focused: {
      height: 194,
      width: 323,
    },
  },
};

function onMouseOver(x) {
  const dims = dimensions[x.id];
  console.log(dims.focused.height + "px");
  x.style.height = dims.focused.height + "px";
  x.style.width = dims.focused.width + "px";
}

function onMouseOut(x) {
  const dims = dimensions[x.id];
  console.log("x", x);
  console.log(dims);
  x.style.height = dims.normal.height + "px";
  x.style.width = dims.normal.width + "px";
}

