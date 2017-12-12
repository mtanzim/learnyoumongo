var mongo=require('mongodb').MongoClient;
var mongo = require('mongodb').MongoClient;
    mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
      if (err){throw err;}
      var myDB=db.db('learnyoumongo');
      var col=myDB.collection('parrots');
      //console.log(col.find());
      var queryArr=col.find({
        age: { $gt: +process.argv[2] }
      }).toArray(function(err, documents){
        if(err){console.log(err);}
        console.log(documents);
      });
      db.close();
    });
    
    