const fs = require('fs')
const util = require('util');

const readFileSync = util.promisify(fs.readFile)
const writeFileSync = util.promisify(fs.writeFile)
const appendFileSync = util.promisify(fs.appendFile)
path='./Textos/TextoA'
/*
appendFileSync(path,'CCC').then(()=>{
    console.log("adicionado")
}).catch((erro)=>{
    console.log(erro)
})
writeFileSync(path,'AAA').then(()=>{
    console.log("Sucesso")
}).catch((erro)=>{
    console.error(erro)
})*/
async function readFileSyncF(name){
    return await readFileSync(name, {encoding: 'utf-8', flag: 'r'});
}

module.exports.readFileSyncF = readFileSyncF
module.exports.writeFileSync = writeFileSync
module.exports.appendFileSync = appendFileSync