var mongoose = require('mongoose');

var AthletSchema = mongoose.Schema({
    name:{
    type: string,
    required: true
    }
    dateofbirth:{
    type: string,
    required: false
    }
})
var athlet =module.exports= mongoose.model('Athlet', AthletSchema);