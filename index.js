let constraints = {
  email: {
    presence: {
      message: "是必填的欄位",
    },
    email: true,
  },
  password: {
    presence: {
      message: "^密碼是必填的欄位",
    },
    length: {
      minimum: 5,
      message: "^密碼長度需大於５位數",
    },
  },
  確認密碼: {
    presence: {
      message: "是必填的欄位",
    },
    equality: {
      attribute: "password", // 此欄位要和密碼欄位一樣
      message: "^密碼不相同",
    },
  },
};

const form = document.querySelector("#main");
const inputs = document.querySelectorAll("input");
// console.log(form);          // form HTML
console.log("inputs", inputs); // NodeList [inputs#email, inputs#password, inputs#confirm-password]

// 讓每個 input 綁定監聽
for (let i = 0; i < inputs.length; i++) {
  console.log(inputs.item(i));
  inputs.item(i).addEventListener("input", () => {
    let errors = validate(form, constraints) || {}; // 顯示所有input的問題｜🔥為什麼 form 可以直接放進去
    // console.log(errors);
    let currentDom = inputs.item(i);
    showErrorsForInput(currentDom, errors[currentDom.name]);
  });
}

// 顯示 Error
function showErrorsForInput(input, errors) {
  let parentNode = input.parentNode;
  let p = document.createElement("p");
  p.classList.add("text-red-500");
  resetShowErrors(parentNode);
  if (errors) {
    p.textContent = errors;
    parentNode.appendChild(p);
  }
}

function resetShowErrors(parentNode) {
  let p = parentNode.querySelector("p"); // 🔥document改成parentNode，解決取到第一個Element的問題
  if (p) {
    parentNode.removeChild(p);
  }
  return;
}
