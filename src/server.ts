import express  from 'express'//servidor
import dotenv from 'dotenv'//variavel de ambiente
import mustache from 'mustache-express'//mustache é o html
import path from 'path'//para usar a pasta publica
import mainRoutes from './routes/index'
dotenv.config()

//configuração para o servidor
const server = express()
server.set('view engine','mustache')
server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache())
//------------------
server.use(express.static(path.join(__dirname,'../public')))//pasta public
server.listen(process.env.port)//porta para o servidor
server.use(mainRoutes)

//pagina não encontrada
server.use((req,res)=>{
    res.send("Pagina não encontrada")
})
//------------------------------------------------