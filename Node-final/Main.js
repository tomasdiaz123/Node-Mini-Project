const fs = require('fs')
const http = require('http')
const files = require('./Files')
const foreach = require('./Foreach')
const express = require('express')
const app = express()

const textos =fs.readdirSync('./Textos/')


async function main(){
    const server = http.createServer(async (req, res) => {
        if (req.url === '/') {
            res.write('<h1>Selecione um dos textos!</h1>\n')
            await textos.asyncForEach((texto)=>{ res.write("<div><h2>"+texto+"</h2> <a href=\"http/localhost:3001/textos/"+texto+"\" class=\"button\">Ler texto</a>\n </div>\n\n")})
            res.end()
        }
        if (req.url.includes('textos/')) {
            console.log(req.body)
            texto = req.url.split('/').pop();
            data = await files.readFileSyncF("./Textos/"+texto)
            res.write("<div><h2>"+data+"</h2></div>\n")
            res.write(`
                <form method="POST">
                    <button type='submit' value="adicionar">Adicionar</button>
                    <button type='submit' value="modificar"> Modificar do 0</button>
                </form>
            `)
            res.end()
        }
    })
    server.listen(3001)

    console.log('Listening on port 3001...')
}


main()
