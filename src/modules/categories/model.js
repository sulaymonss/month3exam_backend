const { fetchAll } = require('../../lib/postgres')

const categories = () => fetchAll('select * from categories')
const categoryRestaurants = (id) => fetchAll('select * from categories inner join restaurants using(category_id) where category_id = $1', [id])

module.exports = {
    categories,
    categoryRestaurants
}