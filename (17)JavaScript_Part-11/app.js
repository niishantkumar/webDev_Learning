//callback hell example

function isSuccess(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);

    if (internetSpeed > 4) {
        console.log(`Data : ${data}`);
        success();
    } else {

        console.log(`Data : ${data}`);
        failure();
    }
}

isSuccess(
    "Data1",

    () => {
        console.log("Data inserted successfully");

        //data1 inserted, so now insert data2
        isSuccess(
            "Data2",

            () => {
                console.log("Data inserted successfully");;
            },

            () => {
                console.log("Data insertion failed")
            }


        );
    },

    () => {
        console.log("Data insertion failed")
    }

);