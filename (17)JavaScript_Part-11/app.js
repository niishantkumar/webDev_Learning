// //callback hell example

// function isSuccess(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10 + 1);

//     if (internetSpeed > 4) {
//         console.log(`Data : ${data}`);
//         success();
//     } else {

//         console.log(`Data : ${data}`);
//         failure();
//     }
// }

// isSuccess(
//     "Data1",

//     () => {
//         console.log("Data inserted successfully");

//         //data1 inserted, so now insert data2
//         isSuccess(
//             "Data2",

//             () => {
//                 console.log("Data inserted successfully");;
//             },

//             () => {
//                 console.log("Data insertion failed")
//             }
//         );
//     },

//     () => {
//         console.log("Data insertion failed")
//     }

// );


// //Promise
// function insertToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random * 10) + 1;

//         if (internetSpeed > 4) {
//             resolve("Success : data was saved");
//         } else {
//             reject("Failure: weak connection");
//         }

//     }
//     );
// }

// let request = insertToDb("Hello");
// request
//     .then(() => {
//         console.log("Promise resolved");
//     })
//     .catch(() => {
//         console.log("Promise rejected");
//     });


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const h1 = document.querySelector("h1");

            if (h1) {
                h1.style.color = color;
                resolve("Color changed to " + color);
            } else {
                reject("h1 element not found");
            }
        }, delay);
    });
}


changeColor("red", 2000)
    .then((result) => {
        console.log(result);

        return changeColor("blue", 2000);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });