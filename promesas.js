function aleatorio() {

    let prom = new Promise((resolve, reject) => {
        let randomNum = Math.random();
        console.log(randomNum);
        if (randomNum > 0.1) {
            resolve('La promesa se resuelve');
        } else {
            reject('El número es menor de 0.5');
        }
    });

    return prom;

}

// aleatorio()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('Paso por el finally');
//     });

// async await 

// async function main() {
//     try {
//         const msg = await aleatorio();
//         const msg2 = await aleatorio();
//         const msg3 = await aleatorio();
//         console.log(msg);
//     } catch (err) {
//         console.log(err);
//     }
// }
// main();

// (async () => {
//     const msg = await aleatorio();
// })();

let arrPromesas = [aleatorio(), aleatorio(), aleatorio()];

Promise.all(arrPromesas)
    .then(arrMsgs => {
        console.log(arrMsgs);
    })
    .catch(err => {
        console.log(err);
    });
