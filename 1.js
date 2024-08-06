let boxes=document.querySelectorAll(".box");
let l=document.querySelector(".last");
let mess=document.querySelector(".hide");

let chance=true;

let valid=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(chance){
            box.innerText="X";
            chance=false;
        }

        else{
            box.innerText="O";
            chance=true;
        }
        box.disabled=true

        checkwinner();
    })

})

const dis=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
 
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showiner = (winner)=>{
    mess.innerText=`Congratulations,winner is ${winner}`;
    mess.classList.remove("hide");
    dis();
}

const checkwinner = () => {
    for(cross of valid){
        let p1=boxes[cross[0]].innerText;
        let p2=boxes[cross[1]].innerText;
        let p3=boxes[cross[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                showiner(p1);
            }
        }
    }
}

const reset=()=>{
    chance=false;
    enable();
    mess.classList.add("hide");
}

l.addEventListener("click",reset);
