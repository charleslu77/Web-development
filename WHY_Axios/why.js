// USE AJAX, XMLHttpRequest
// IT IS BULKY WHEN WE NEED TO "GET" MULTIPLE TIMES
// const req = new XMLHttpRequest();
// req.onload = function () {
//     console.log("Loaded!");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }
// req.onerror = function () {
//     console.log("ERROR");
//     console.log(this);
// }
// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();


// USE fetch INSTEAD OF AJAX, WHICH IS SIMPLER
// fetch('https://swapi.dev/api/people/1/')
//     .then((res)=>{
//         console.log("Resolved", res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("Hi, ",data);
//         return fetch('https://swapi.dev/api/people/2/')
//     })
//     .then((res)=>{
//         console.log("People 2 resolved");
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("Hi, ",data);
//     })
//     .catch((e)=>{
//         console.log("ERROR", e)
//     })


// REFACTOR
// BUT a little annoying when parsing the json
// const getStarWarPerson = async () => {
//     try {
//         const res = await fetch('https://swapi.dev/api/people/1/');
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch('https://swapi.dev/api/people/2/');
//         const data2 = await res2.json();
//         console.log(data2)
//     }
//     catch(e){
//         console.log("ERROR! ", e);
//     }
// }
// getStarWarPerson();


// AXIOS, which is BETTER than fetch at some point.
// axios.get('https://swapi.dev/api/people/1/')
//     .then((res)=>{
//         console.log("Response: ",res.data);
//     })
//     .catch((e)=>{
//         console.log("ERROR", e);
//     })

// REFACTOR to async function
const getStarWarPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR! ", e);
    }
}
getStarWarPerson(10005);
