import constraints from "./constraints.js";
import { showErrorsForInput } from "./effects.js";

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
