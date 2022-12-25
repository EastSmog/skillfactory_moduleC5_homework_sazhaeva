
const jsonString = `
    {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const jsonDOM = JSON.parse(jsonString);
const list = jsonDOM.list;

let mainResult = {
    list: []
};

function allStudents() {
    for (let elem of list) {
        let result = {
            name: elem.name,
            age: Number(elem.age),
            prof: elem.prof,
        }
        mainResult.list.push(result);
    }
    return mainResult;
}

console.log(allStudents());