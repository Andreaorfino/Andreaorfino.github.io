//ritorna un intero casuale inferiore al parametro passato
function getRandomInt(max) {
    min = 30;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// genera un Hex color code che inizia con #0 (in modo che i colori siano tutti freddi)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#0';
    for (var i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color + "3";
}

// ----------------------------

const fileNames = ['areas', 'ingredients', 'meals'];
const allDataLoadPromises = [];

for (let i = 0; i < fileNames.length; i++) {
    const fileName = '/data/' + fileNames[i] + '.json';
    allDataLoadPromises.push(new Promise((resolve) => {
        d3.json(fileName).then(data => {
            resolve(data);
        });
    }));    
}

Promise.all(allDataLoadPromises).then( datasets => {
    datasets.forEach( data => {
        console.log(data);
    })
})