let first = confirm("хочешь попробовать мой калькулятор?");
if (first == true) {
  let second = prompt("введи первое число")
    let third = prompt("введи второе число")
    alert("результат: " + (Number(second) + Number(third)))    
} else {
  alert("Хай гитлер")
}