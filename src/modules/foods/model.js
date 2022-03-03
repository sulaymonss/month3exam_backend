const { fetchAll } = require('../../lib/postgres')

const restaurants = (id) => fetchAll("select * from foods where restaurant_id = $1", [id])

module.exports = {
    restaurants
}