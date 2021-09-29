require('dotenv').config()

const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb+srv://admin:mongodb@cluster0.7nzu9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const express = require("express")
const cors = require('cors')
const router = require('./routes/index')
const errorHendler = require('./middleware/ErrorHandlingMiddleware')



const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHendler) //обработка ошибок, последний middleware

app.listen(PORT, () => console.log('server start'))

const start = async () => {
    try {
        await client.connect()
        console.log("подключение установлено")
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({ name: 'ann', age: '15' })
        const user = await users.findOne({ name: 'ann' })
        console.log(user)
    } catch (e) {
        console.log(e)
    }
}

start()