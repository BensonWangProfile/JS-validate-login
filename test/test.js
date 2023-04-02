let constraints = {
  username: {
    presence: true,
    exclusion: {
      within: ["benson"],
      message: "%{value} 已被使用 ",
    },
    length: {
      minimum: 2,
      message: "^姓名最少 2 個字",
    },
  },
  email: {
    presence: {
      message: "此為必填欄位",
    },
    email: {
      message: "不符合 Email 格式",
    },
  },
  password: {
    presence: {
      message: "此為必填欄位",
    },
    length: {
      minimum: 6,
      message: "密碼需大於６位數",
    },
  },
  "confirm-password": {
    presence: {
      message: "此為必填欄位",
    },
    equality: {
      attribute: "password",
      message: "請確認密碼",
    },
  },
};

// 監聽
const userNameInput = document.querySelector("#username-input");
const email = document.querySelector("#email");
const userName = document.querySelector("#username");

userNameInput.addEventListener("change", (e) => {
  let nameInput = e.target.value;
  let error = validate({ username: nameInput }, constraints);
  let { username } = error;
  console.log(error);
  addErrorMessage(userName, username);
});

// 創子元素存 Error 訊息
function addErrorMessage(dom, error) {
  // let str = `<p class="text-red-500 user-error">${error}</p>`;
  let block = document.createElement("p");
  block.classList.add("text-red-500");
  block.classList.add("user-error");
  if (error === undefined) {
    let userError = document.querySelector(".user-error");
    if (userError) {
      dom.removeChild(userError); // <div> <h2><input> <p> </input>
    }
    return;
  }
  // dom.innerHTML += str;
  block.innerHTML = error;
  dom.appendChild(block);
}

// 監聽事件做成 function 讓 ID 可以丟入
function validateCheck(inputId, validateName) {
  inputId.addEventListener("change", (e) => {
    let input = e.target.value;
    let error = validate(input, constraints);
    // let { validateName } = error;
    console.log(error[validateName]);
    addErrorMessage(inputId, error[validateName]);
  });
}

validateCheck(email, "email");

// 監聽 input 值改變的狀況
// var inputs = document.querySelectorAll("input, textarea, select");
// for (var i = 0; i < inputs.length; ++i) {
//   inputs.item(i).addEventListener("change", function (ev) {
//     var errors = validate({ username: "nick" }, constraints) || {};
//     showErrorsForInput(this, errors[this.name]);
//   });
// }
