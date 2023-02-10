(function sleep(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(valor));
        }, 3000);
    })
}) (25);

