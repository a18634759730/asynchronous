Response:[
    {
        "id": 1,
        "name": "John",
        "classroomId": 75
    }
];
Response:[
    {
        "id": "history",
        "studentId": 1
    }, 
    {
        "id": "algebra",
        "studentId": 1
    }
]
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
          data = [
            {
              id: 1,
              name: 'John',
              classroomId: 75
            }, 
            {
              id: 2,
              name: 'Tom',
              classroomId: 75
            }
          ]; 
      break;
      case APIS.COURSES:
          data = [
              {
                id:1,
                class:[
                  {
                    id: 'history',
                    studentId: 1
                  }, 
                  {
                    id: 'algebra',
                    studentId: 1
                  }
                ]
              },
              {
                id: 2,
                class:[
                  {
                    id: 'history',
                    studentId: 2
                  }, 
                  {
                    id: 'algebra',
                    studentId: 2
                  }
                ]
              }
          ];
      break;
      case APIS.EVALUATION:
          data = [
            {
              id:1,
              state:[
                {
                  "id": 'history',
                  "score": 54,
                  "totalScore": 100
                },
                {
                  "id": 'algebra',
                  "score": 50,
                  "totalScore": 100
                }
              ]
            },
            {
              id:2,
              state:[
                {
                  "id": 'history',
                  "score": 78,
                  "totalScore": 100
                },
                {
                  "id": 'algebra',
                  "score": 65,
                  "totalScore": 100
                }
              ]
            }
          ]
      break;
      } 
      resolve(data);
  });
}
async function getData(api){
  let ids = null;
  let data = null;
  let arr = null;
  let subject = null;
  let list = {}
  await fetchData(api).then((item)=>{
      ids = item.map((key)=>{
          return key;
      })
  })

  await fetchData(APIS.COURSES).then((res)=>{
        data = res.filter(item => {
            if(ids[1].id === item.id){
              return item
            }
        });
        return data
  }).then((res)=>{
     res.map(cls=>{
        return subject = cls.class
    })
  })

  await fetchData(APIS.EVALUATION).then((res)=>{
      res.filter((item)=>{
          if(data[0].id === item.id){
            return arr = item.state
          }
      })
      return arr
  }).then((res)=>{
      let lis = 0;
      let alg = 0;
      let num = 0;
      res.forEach(kys=>{
          if(kys.id === subject[0].id){
            lis = kys.score
          }else if(kys.id === subject[1].id){
            alg = kys.score
          }
      })
      num = (lis + alg) / 2
      list.id = ids[1].id;
      list.name = ids[1].name;
      list.average = num
      console.log(list)
  })

}
getData(APIS.STUDENTS)