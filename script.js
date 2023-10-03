var input1 = document.getElementById('cal_value');
var input2 = document.getElementById('cal_value1');
var btn = document.querySelectorAll('.btn');

let inp_value = "";
let inp_small = "";
let arr = Array.from(btn);

arr.forEach(button =>{
    button.addEventListener('click', (e)=>{

        if (e.target.innerHTML == "=") {
            inp_value = eval(inp_value);
            input1.value = inp_value;
            input2.value = "";
        }else if(e.target.innerHTML == "AC"){
            inp_value = "";
            input1.value = inp_value;
            inp_small = "";
            input2.value = inp_small;
        }else if (e.target.innerHTML == "DE") {
            inp_value = inp_value.slice(0,inp_value.length-1);
            input1.value = inp_value;
            inp_small = eval(inp_value);
            input2.value = inp_small;
        }else{
            inp_value += e.target.innerHTML;
            input1.value = inp_value
            inp_small = eval(inp_value);
            input2.value = inp_small;
        }
        
    })
})