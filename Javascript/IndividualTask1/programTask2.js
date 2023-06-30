function drawLines(num, flag){
    if (flag)
        for(let i = 1; i<=num; i+=1)
            document.write(`<hr width="${100/i}%">`);
    else{
        for(let i = num; i>=1; i-=1)
            document.write(`<hr width="${100/i}%">`);
    }
}
let count = prompt("Введите значение n=");
if(isNaN(parseFloat(count)) || !isFinite(count) || +count < 3 || +count>15 || Math.trunc(+count) !== +count){
    alert("Ошибочное число!");
}
else{
    drawLines(count, true);
    document.write("<table>");
    for(let i = 1; i<=count; i+=1){
        document.write("<tr>");
        for(let j = 0; j<count; j+=1){
            if(j % 2 === 0 && i <= count - (j/2) && i > (j/2)){
                document.write("<td style='background-color: yellow'>1000</td>");
            }
            else{
                document.write("<td>2000</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>")
    drawLines(count, false);
}