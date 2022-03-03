const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const { id } = req.query
            const categories = await model.categories()
            const restaurants = await model.categoryRestaurants(id)
            res.json({
                categories,
                restaurants
            })
        } catch (err) {
            console.log(err.message)
            throw new Error(500)
        }
    }
}