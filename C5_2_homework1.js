const parser = new DOMParser();

let mainResult = {
    list: []
};

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const allStudentsNodes = listNode.querySelectorAll("student");


function allStudents() {
    for (let elem of allStudentsNodes) {
        const nameNode = elem.querySelector("name");
        const firstNode = nameNode.querySelector("first");
        const secondNode = nameNode.querySelector("second");
        const ageNode = elem.querySelector("age");
        const profNode = elem.querySelector("prof");
        const langAttr = nameNode.getAttribute('lang');
        let result = {
            name: (firstNode.textContent + ' ' + secondNode.textContent),
            age: Number(ageNode.textContent),
            prof: profNode.textContent,
            lang: langAttr,
        }
        mainResult.list.push(result);
    }
    return mainResult;
}

console.log(allStudents());