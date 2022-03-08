let number1 = document.getElementById("number1");
let n = 0;
setInterval(() => {
    if(n == 65){
        clearInterval();
    }else{
        n += 1;
        number1.innerHTML = n + "%"
    }
}, 17)

let number2 = document.getElementById("number2");
let k = 0;
setInterval(() => {
    if(k == 100){
        clearInterval();
    }else{
        k += 1;
        number2.innerHTML = k + "%"
    }
}, 17)

let number3 = document.getElementById("number3");
let m = 0;
setInterval(() => {
    if(m == 78){
        clearInterval();
    }else{
        m += 1;
        number3.innerHTML = m + "%"
    }
}, 17)

let number4 = document.getElementById("number4");
let i = 0;
setInterval(() => {
    if(i == 91){
        clearInterval();
    }else{
        i += 1;
        number4.innerHTML = i + "%"
    }
}, 17)

let number5 = document.getElementById("number5");
let j = 0;
setInterval(() => {
    if(j == 97){
        clearInterval();
    }else{
        j += 1;
        number5.innerHTML = j + "%"
    }
}, 17)

let num1 = document.getElementById("num1");
let q = 0;
setInterval(() => {
    if(q == 27){
        clearInterval();
    }else{
        q += 1;
        num1.innerHTML = q;
    }
}, 17)

let num2 = document.getElementById("num2");
let w = 0;
setInterval(() => {
    if(w == 25){
        clearInterval();
    }else{
        w += 1;
        num2.innerHTML = w;
    }
}, 25)

let num3 = document.getElementById("num3");
let e = 0;
setInterval(() => {
    if(e == 2){
        clearInterval();
    }else{
        e += 1;
        num3.innerHTML = e;
    }
}, 100)

let num4 = document.getElementById("num4");
let r = 0;
setInterval(() => {
    if(r == 97){
        clearInterval();
    }else{
        r += 1;
        num4.innerHTML = r + "%";
    }
}, 15)