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

export { showErrorsForInput, resetShowErrors };
