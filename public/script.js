let inputElem = document.getElementById("eqn");

let buttons = document.getElementsByClassName("btn");

// console.log(buttons);
// console.log(inputElem);

let eqn = '';
let oper = '+';
let val = eqn[-1]==='+' || eqn[-1]==='-' || eqn[-1]==='*' || eqn[-1]==='/' || eqn[-1]==='%' ;
//let x = '';

let calculator = 0;
const calc = (i) => {
    if(i===4){
        eqn = eqn + '1';
        inputElem.value = eqn ;
        // console.log("1 is clicked");
        //console.log(eqn);
    }else if(i===5){
        eqn = eqn + '2';
        inputElem.value = eqn ;
    }else if(i===6){
        eqn = eqn + '3';
        inputElem.value = eqn ;
    }else if(i===8){
        eqn = eqn + '4';
        inputElem.value = eqn ;
    }else if(i===9){
        eqn = eqn + '5';
        inputElem.value = eqn ;
    }else if(i===10){
        eqn = eqn + '6';
        inputElem.value = eqn ;
    }else if(i===12){
        eqn = eqn + '7';
        inputElem.value = eqn ;
    }else if(i===13){
        eqn = eqn + '8';
        inputElem.value = eqn ;
    }else if(i===14){
        eqn = eqn + '9';
        inputElem.value = eqn ;
    }else if(i===16){
        eqn = eqn + '00';
        inputElem.value = eqn ;
    }else if(i===17){
        eqn = eqn + '0';
        inputElem.value = eqn ;
    }else if(i===0){
        eqn = '';
        calculator = 0;
        oper = '+';
        inputElem.value = eqn ;
    }else if(i===1){
        eqn = eqn.slice(0,-1) ;
        inputElem.value = eqn ;
    }else if(i===18){
        eqn = eqn + '.';
        inputElem.value = eqn ;
    }else if(i===7){
        let val = eqn[eqn.length-1]==='+' || eqn[eqn.length-1]==='-' || eqn[eqn.length-1]==='*' || eqn[eqn.length-1]==='/' || eqn[eqn.length-1]==='%' ;
        if(val===true){
            let eqn1 = eqn.slice(0,eqn.length-1);
            eqn1 = eqn1+'+';
            inputElem.value = eqn1;
        }else{
        eqn = eqn + '+';
        inputElem.value = eqn ;}
    }else if(i===11){
        let val = eqn[eqn.length-1]==='+' || eqn[eqn.length-1]==='-' || eqn[eqn.length-1]==='*' || eqn[eqn.length-1]==='/' || eqn[eqn.length-1]==='%' ;
        if(val===true){
            let eqn1 = eqn.slice(0,eqn.length-1);
            eqn1 = eqn1+'-';
            inputElem.value = eqn1;
        }else{
        eqn = eqn + '-';
        inputElem.value = eqn ;}
    }else if(i===15){
        let val = eqn[eqn.length-1]==='+' || eqn[eqn.length-1]==='-' || eqn[eqn.length-1]==='*' || eqn[eqn.length-1]==='/' || eqn[eqn.length-1]==='%' ;
        if(val===true){
            let eqn1 = eqn.slice(0,eqn.length-1);
            eqn1 = eqn1+'/';
            inputElem.value = eqn1;
        }else{
        eqn = eqn + '/';
        inputElem.value = eqn ;}
    }else if(i===19){
        let val = eqn[eqn.length-1]==='+' || eqn[eqn.length-1]==='-' || eqn[eqn.length-1]==='*' || eqn[eqn.length-1]==='/' || eqn[eqn.length-1]==='%' ;
        if(val===true){
            let eqn1 = eqn.slice(0,eqn.length-1);
            eqn1 = eqn1+'*';
            inputElem.value = eqn1;
        }else{
        eqn = eqn + '*';
        inputElem.value = eqn ;}
    }else if(i===3){
        let val = eqn[eqn.length-1]==='+' || eqn[eqn.length-1]==='-' || eqn[eqn.length-1]==='*' || eqn[eqn.length-1]==='/' || eqn[eqn.length-1]==='%' ;
        if(val===true){
            let eqn1 = eqn.slice(0,eqn.length-1);
            eqn1 = eqn1+'%';
            inputElem.value = eqn1;
        }else{
        eqn = eqn + '%';
        inputElem.value = eqn ;}
    }else{
        let val = eqn[eqn.length-1]==='+' || eqn[eqn.length-1]==='-' || eqn[eqn.length-1]==='*' || eqn[eqn.length-1]==='/' || eqn[eqn.length-1]==='%' ;
        if(val===true){
            let eqn1 = eqn.slice(0,eqn.length-1);
            calculator = eval(eqn1);
            inputElem.value = calculator;
        }else{
            calculator = eval(eqn);
            inputElem.value = calculator;}
    }
}


for(i=0; i<buttons.length ; i++){
     let ind = i;
    buttons[i].addEventListener("click",()=>{
        calc(ind);
    })
}