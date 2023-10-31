const fs = require('fs');

const ourReadStream = fs.createReadStream('./bigdata.txt', 'utf8');
const ourWriteStream = fs.createWriteStream('./output.txt');

ourReadStream.on('data', (chank) => {
    ourWriteStream.write(chank);
});
