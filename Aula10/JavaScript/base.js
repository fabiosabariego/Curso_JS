function Somar(){
    var tn1 = Number(document.getElementById('num1').value);
    var tn2 = Number(document.getElementById('num2').value);
    var res = document.querySelector('div#res')
    var soma = tn1 + tn2;
    res.innerHTML = `A soma de ${tn1} + ${tn2} = ${soma}`;
}