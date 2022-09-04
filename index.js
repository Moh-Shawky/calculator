var all = 0;
var flag = 0;
var but1 = '';
var op = '';
var but2 = '';
var el = '';
var cont=0;
var result=0;
var num = document.getElementsByClassName("num");
var pr = document.querySelector("button");
var opr = document.querySelectorAll(".op")
for (let j = 0; j < opr.length; j++) {
    opr[j].addEventListener("click", function () {
        op = opr[j].innerHTML;
    })
}
pr.innerHTML = 0;
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {
        all = num[i].innerHTML
        if (all == "CE") {
            location.reload();
        }
        if (num[i].classList[1] == "op") {
            op = all;
            flag = 1;
        }
        if (flag == 0) {
            but1 = but1.concat(all)
        }
        if (flag == 1 && all != "CE" && all != "=") {
            pr.innerHTML = 0;
            but2 = but2.concat(all)
        }
        if (all == "=") {
            all=all.slice(0,all.length-1)
            but1 = parseFloat(but1)
            l = but2.length;
            but2 = but2.slice(1, l)
            but2 = parseFloat(but2)
            pr.innerHTML = result;
            if (op == '+') {
                result = but1 + but2;
            }
            if (op == '-') {
                result = but1 - but2;
            }
            if (op == '*') {
                result = but1 * but2;

            }
            if (op == '÷') {
                result = but1 / but2;
 
            }
            if (op == '%') {
                result = but1 % but2;

            }
            
            cont=1
            pr.innerHTML = result;

        }


        if(all !="CE"&&all !="=" && cont==0 ) {
            pr.innerHTML = all;
            el = el.concat(pr.innerHTML)
            pr.innerHTML = el
        }
    })
}
var li= document.querySelector(".li")
li.addEventListener("click",function(){
    li.formAction="mailto:mohamedshawky20m@email.com"
});

// for (let i = 0; i < num.length; i++) {
//     num[i].addEventListener("click", function () {
//         op = this.innerHTML
//         if (op == "ce") {
//             document.querySelector("button").innerHTML = ' ';
//         }
//         else {
//             document.querySelector("button").innerHTML = all +' '+ op;
//         }
//     });
// }
// for (let i = 0; i < num.length; i++) {
//     num[i].addEventListener("click", function () {
//         but2 = this.innerHTML
//         parseInt(but2)
//         if (but2 == "ce") {
//             document.querySelector("button").innerHTML = ' ';
//         }
//         else {
//             document.querySelector("button").innerHTML = all, op, but2;
//         }
//     });
//     if(op=='+'){
//         result=all+but2;
//     }
//     if(op=='-'){
//         result=all-but2;
//     }
//     if(op=='*'){
//         result=all*but2;
//     }
//     if(op=='÷'){
//         result=all/but2;
//     }
//     if(op=='%'){
//         result=all%but2;
//     }
// }
// for (let i = 0; i < num.length; i++) {
//     num[i].addEventListener("click", function () {
//         el = this.innerHTML
//         if (el == "ce") {
//             document.querySelector("button").innerHTML = ' ';
//         }
//         else {
//             document.querySelector("button").innerHTML = result;
//         }
//     });
// }