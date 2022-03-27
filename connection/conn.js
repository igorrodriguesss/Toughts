const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conexão realizada com sucesso!')
}catch(err) {
    console.log(`Não foi possivel realizar conexão com banco de dados ${err}`)
}

module.exports = sequelize