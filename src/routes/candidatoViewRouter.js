import { Router } from "express";
import { candidatos } from "../dados/candidatos.js";

const candidatoViewRouter = Router();

candidatoViewRouter.get('/candidatos', (req, res) => {

    res.render('home', { titulo : 'Lista de Candidatos', candidatos })
   
  
     ` <!DOCTYPE html>
        <html lang="en">
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        </head>
        <body>
        <head>
        <h1>Lista de Candidatos</h1>
        </head>
        <main>
        <section>
            <h2> Teste do Servidor</h2>
            ${
                
                canditatos.map( candidato => ` ${candidatos.nome} - ${candidatos.numeroUrna} </li>`).join('')
                
            }
        </section>
         </main>
    </body>
    </html>`

  

})

candidatoViewRouter.get('/candidato/:id', (req, res) => {
    const numero = parseInt(req.params.id)
    const candidato = candidatos.find(cand => cand.numeroUrna === numero)
    if ( candidato) {
        res.status(200)
        res.json(candidato)
    } else {
        res.status(404).json({ error: 'Candidato não encontrado' }
        )
    }
})

export default candidatoViewRouter