import express from 'express'
import cors from 'cors'
import router from './router.js'
import bodyParser from 'body-parser';


const app = express()

app.listen(3000, () => {
    console.log("Server is listenning on port 3000")
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)



