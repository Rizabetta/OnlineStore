const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb+srv://admin:mongodb@cluster0.7nzu9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

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

require('dotenv').config()
const express = require("express")

const PORT = process.env.PORT || 5000
const app = express()

app.listen(PORT, () => console.log('server start'))