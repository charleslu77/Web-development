// const delayColor = (newColor, delay, doNext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor=newColor;
//         doNext && doNext();
//     }, delay)
// }


// TOO BULKY, SO WE USE PROMISE
// delayColor('red', 2000, ()=>{
//     delayColor('orange', 2000, ()=>{
//         delayColor('blue', 2000, ()=>{
//             delayColor('green', 2000, ()=>{
//                 delayColor('yellow', 2000, ()=>{
//                     delayColor('indigo', 2000, ()=>{})
//                 })
//             })
//         })
//     })
// })

const delayColor = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}

// USE PROMISE
// delayColor('red', 1500)
//     .then(()=>delayColor('orange', 1500))
//     .then(()=>delayColor('yellow', 1500))
//     .then(()=>delayColor('green', 1500))
//     .then(()=>delayColor('blu1', 1500))
//     .then(()=>delayColor('indigo', 1500))


// MORE SIMPLE WAY: async AND await
// await means we cannot go through the next code until we finsh the code now.
async function rainbow(){
    await delayColor('red', 500);
    await delayColor('orange', 500);
    await delayColor('yellow', 500);
    await delayColor('green', 500);
    await delayColor('indigo', 500);
    await delayColor('blue', 500);
    await delayColor('violet', 500);
}
// rainbow()
rainbow().then(()=>console.log("End of Rainbow"));

