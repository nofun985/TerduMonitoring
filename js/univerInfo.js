let num1 = document.getElementById("num1");
let q = 25995;
setInterval(() => {
    if(q == 26395){
        clearInterval();
    }else{
        q += 1;
        num1.innerHTML = q;
    }
}, 0)

let num2 = document.getElementById("num2");
let w = 170791;
setInterval(() => {
    if(w == 170891){
        clearInterval();
    }else{
        w += 1;
        num2.innerHTML = w;
    }
}, 25)

let num3 = document.getElementById("num3");
let e = 600;
setInterval(() => {
    if(e == 747){
        clearInterval();
    }else{
        e += 1;
        num3.innerHTML = e;
    }
}, 10)

let num4 = document.getElementById("num4");
let r = 0;
setInterval(() => {
    if(r == 14){
        clearInterval();
    }else{
        r += 1;
        num4.innerHTML = r;
    }
}, 100)