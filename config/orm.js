const connection = require('./connection.js');

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(obj){
    var arr = [];

    for (var key in obj){
        var cvalue = obj[key];
        if(Object.hasOwnProperty.call(obj, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            return arr.toString();
        }
    
    }
}


const orms = {
    selectAll(){

    },

    insertOne(){

    },

    updateOne(){

    },

    deleteOne(){

    }

}

module.exports = orms;