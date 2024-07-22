let result=document.querySelector('.result');
console.log(result)
let buttons=document.querySelectorAll('button');
console.log(buttons);

var specialchar=["/","%","+","X","-","="];

var output=" ";


var calculator=(btnvalue)=>{
    if(btnvalue==="=" && output!==" "){
        output=eval(output.replace("%","/100"));
    }

    else if(btnvalue==="AC"){
        output='';
    }
    else if(btnvalue==="DEL"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output==="" && specialchar.includes(btnvalue)){
            return;
        
        }
        output+=btnvalue;
            
    }

    result.value=output;
    console.log(btnvalue);

}
buttons.forEach((button)=>{
    button.addEventListener('click',() =>
       calculator(button.innerText)
)
})