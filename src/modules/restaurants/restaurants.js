const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const { category_id } = req.query

            res.json(await model.restaurants(category_id))
        } catch (err) {
            console.log(err.message)
            throw new Error(500)
        }
    }
}