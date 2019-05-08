const oBox = document.getElementById('box');
console.log(oBox);

const long = [
    {
        x:0,
        y:0,
    },
    {
        x:350,
        y:800,
    },
    {
        x:700,
        y:0,
    },
    {
        x:1050,
        y:800,
    },
    {
        x:1400,
        y:0,
    }
]

oBox.addEventListener('transitionend',()=>{
    let {x,y} = oBox;
    moveTo.reslove({x,y});
},false);

function moveTo(x,y){
    return new Promise((reslove,reject)=>{
        moveTo.reslove = reslove;
        oBox.x = x;
        oBox.y = y;
        oBox.style.transform = `translate(${x}px,${y}px)`;
    })
}

oBox.onclick = async ()=>{
    for(let item of long){
        console.log(item)
        await moveTo(item.x,item.y)
    }
}