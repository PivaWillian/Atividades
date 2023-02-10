setInterval(() => {
    const data = new Date();
    let timeNow = data.toLocaleTimeString('default', {
    hour: '2-digit',        
    minute: '2-digit',
    second: '2-digit',
})
    console.log(timeNow);
}, 1000);