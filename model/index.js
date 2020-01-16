var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017",function(){
  console.log('database is connected successfully');
});
