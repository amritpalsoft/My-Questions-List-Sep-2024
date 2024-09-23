const firstPromise = new Promise((res, rej) => {
    setTimeout(rej, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});

// Promise.allSettled([firstPromise, secondPromise]).then(res => console.log(res)).catch((err) => console.log(err, 'some error'))

const async1 = async () => {
    try {
        throw Error('some error');
    } catch (err) {
        return err.message
    }
}

const async2 = async () => {
    try {
        return 'response'
    } catch (err) {
        return err
    }
}

Promise.all([async1(), async2()]).then((res) => console.log(res)).catch((err) => console.log(err))