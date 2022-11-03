

const jokes=document.querySelector('#jokes');
const button=document.querySelector('button');


// From https://icanhazdadjoke.com/api, we know we can set a header 
const getDadJoke = async () => {
    try{
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
    }catch(e){
        return "No Jokes avaiable! Sorry";
    }
}
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement("LI");
    newLi.innerText = jokeText;
    jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);




