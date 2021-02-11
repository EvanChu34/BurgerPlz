const orm = require('../config/orm.js');

const burger = {
    all(){
        orm.all()
    },
    
    selectAll(){
        orm.select()
    },

    insertOne(){
        orm.insert()
    },
    
    updateOne(){
        orm.update()
    },

}

module.exports = burger;