## 1.async配合transition实现自定义动画
html结构
```html
<div id="box"></div>
```
css样式
```css
#box{
    width:100px; height:100px; 
    background-color:red;  
    border-radius:50%;
    transition:transform 0.5s;  
}
```
javaScript代码
```js
const oBox = document.getElementById('box');
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
```
补全以上代码，使点击oBox后，使oBox走出一个  W 的轨迹（使用async函数实现），并简单写出整体的代码思路。


## 2.使用async函数实现多张图片的依次加载（哪张加载完哪张添加到页面）
```js
// 封装加载图片的promise  
let loadImg = (src)=>{
    return new Promise((resolve, reject)=>{
        // write your code here
    })
}   
const imgs = ['url1', 'url2', 'url3'];
// 依次加载图片
async function fAsync(imgs){
   // write your code here
}

fAsync(imgs);
```


## 3.使用async函数实现多张图片的依次加载（第一张加载完之后才能加载第二张）
```js
// 封装加载图片的promise  
let loadImg = (src)=>{
    return new Promise((resolve, reject)=>{
        // write your code here
    })
}   
const imgs = ['url1', 'url2', 'url3'];
// 依次加载图片
async function fSync(imgs){
   // write your code here
}

fSync(imgs);
```

## 4.解决以下异步代码问题
检索并计算属于同一教室中每个学生的平均分数，例子中教室 ID 为 75。每个学生可以在一年内参加一门或多门课程。以下 API 可用于检索所需数据。
```js
// GET LIST OF ALL STUDENTS
GET /api/students
Response:
[{
    "id": 1,
    "name": "John",
    "classroomId": 75
}]
// GET COURSES FOR GIVEN A STUDENT
GET /api/courses?filter=studentId eq 1
Response:
[{
    "id": "history",
    "studentId": 1
}, {
    "id": "algebra",
    "studentId": 1
}]
// GET EVALUATION FOR EACH COURSE
GET /api/evaluation/history?filter=studentId eq 1
Response:
{
    "id": 200,
    "score": 50,
    "totalScore": 100
}
```
编写一个接受教室 ID 的函数，并根据该函数计算该教室中每个学生的平均值。 该函数的最终输出应该是带有平均分数的学生列表：
```js
[
  { "id": 1, "name": "John", "average": 70.5 },
  { "id": 3, "name": "Lois", "average": 67 },
}
```
使用普通回调，promises，observables，generator 或 async-wait 编写所需的函数。 尝试使用至少 2 种不同的技术解决这个问题。
代码素材用于代替接口
```js
const APIS = {
  STUDENTS: '/api/students',
  COURSES: '/api/courses',
  EVALUATION: '/api/evaluation/'
}; 
function fetchData(api) {
  return new Promise(resolve => {
    let data = null;
    switch (api) {
      case APIS.STUDENTS:
        data = [{
          id: 1,
          name: 'John',
          classroomId: 75
        }, {
          id: 1,
          name: 'Tom',
          classroomId: 75
        }];
        break;
      case APIS.COURSES:
        data = [{
          id: 'history',
          studentId: 1
        }, {
          id: 'algebra',
          studentId: 1
        }];
        break;
      case APIS.EVALUATION:
        data = {
          id: '200',
          score: 50,
          totalScore: 100
        };
        break;
    } 
    resolve(data);
  });
} 
```