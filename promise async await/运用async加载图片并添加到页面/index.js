const oBox = document.getElementById("box");
console.log(oBox)

let loadImg = (src)=>{
    return new Promise((resolve, reject)=>{
        let img = document.createElement('img')
        img.src = `./images/${src}`;
        oBox.appendChild(img)
        setTimeout(()=>{
            resolve(true)
        },2000)
    })
}   
const imgs = ['a1.jpg', 'a2.jpg' , 'a3.jpg' , 'a4.jpg' , 'a5.jpg' , 'a6.jpg'];
// 依次加载图片
async function fAsync(imgs){
   // write your code here
    for(let item of imgs){
        console.log(item)
        await loadImg(item)
    }
}
fAsync(imgs);