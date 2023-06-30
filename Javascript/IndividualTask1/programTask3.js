let search = prompt("Введите строку:");
let pos = 0;
let minNum = "";
let diff = 1;
search += " "
while (search.indexOf(" ", pos) >= 0) {
    let elem = search.substring(pos, search.indexOf(" ", pos));
    if(!(isNaN(parseFloat(elem)) || !isFinite(elem))){
        if(diff > Math.abs(Math.round(elem) - elem)){
            diff = Math.abs(Math.round(elem) -elem);
            minNum = elem;
        }
    }
    pos = search.indexOf(" ", pos) + 1;
}
if(minNum !== ""){
    alert(minNum)
}
else{
    alert("В введенной последовательности нет чисел!")
}