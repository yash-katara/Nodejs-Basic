const readline = require('readline');
const fs = require('fs');
// const rl = readline.createInterface(
//     {
//         input : process.stdin ,
//         output : process.stdout
//     }
// );
// rl.question('Enter your number: ', (num) => { 
// console.log("you entered", num);
// rl.close();

//   })
//   rl.on("close", ()=>{
//     console.log("input stream closed");
//     process.exit(0);
//   })
const textin =fs.readFileSync ('./input.txt', 'utf8'); 
console.log(textin);
const content = `data read from file: ${textin} . \n Date created: ${new Date()}`;
fs.writeFileSync('./output.txt', content)
console.log("file written successfully");
