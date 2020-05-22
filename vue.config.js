const {seller, goods, ratings} =  require('./src/data/data.json')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    devServer: {
        open: true,
        before: function (app) {
            app.get('/api/seller', function (req, res) {
                res.json(seller)
            })
            app.get('/api/goods', function (req, res) {
                res.json(goods)
            })
            app.get('/api/ratings', function (req,res) {
                res.json(ratings)
            })
        }
    },
    configureWebpack:{
        resolve: {
            alias: {
                'pages': resolve('src/pages'),
                'components': resolve('src/components'),
            }
        }
    }
}