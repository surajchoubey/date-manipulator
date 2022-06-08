const path = require('path')
const express = require('express')
const addSubtractDate = require("add-subtract-date")
const router = express.Router()
const app = express()

const PORT = process.env.PORT || 5000

const publicDirectoryPath = path.join(__dirname, './public/');
app.use(express.static(publicDirectoryPath));
app.use(express.json())

router.get('/operation', async(req, res) => {
    
    try {
        const date = await new Date(req.query.date)
        const shift = await req.query.shift

        switch (req.query.op) {
            case 'ad': res.status(200).json({ date: addSubtractDate.add(date, shift, "day").toDateString()})
            break
            case 'aw': res.status(200).json({ date: addSubtractDate.add(date, shift, "week").toDateString()})
            break
            case 'sd': res.status(200).json({ date: addSubtractDate.subtract(date, shift, "day").toDateString()})
            break
            case 'sw': res.status(200).json({ date: addSubtractDate.subtract(date, shift, "week").toDateString()})
            break
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }

})

app.use('/', router)

app.listen(PORT, () => {
    console.log('Server is up and running on http://127.0.0.1:' + PORT)
})