let counter = 0;
let res = "<ul>";
let num1 = 0;
let num2 = 0;
while(true){
    let num = prompt("Введите число:");
    if (isNaN(parseFloat(num)) || !isFinite(num)){
        break;
    }
    counter += 1;
    if(counter === 1){
        num1 = +num;
    }
    else if(counter === 2 ){
        num2 = +num;
        res += `<li>${num1*num2}</li>`;
    }
    else{
        num1 = num2;
        num2 = +num;
        res += `<li>${num1*num2}</li>`;
    }
}
if(counter < 2){
    alert(`Невозможно построить последовательность! Кол-во введенных значений(${counter}) меньше 2`);
}
else{
    res += "</ul>";
    document.write(res);
}