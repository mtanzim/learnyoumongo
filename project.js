var mongo=require('mongodb').MongoClient;
var mongo = require('mongodb').MongoClient;
    mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
      if (err){throw err;}
      var myDB=db.db('learnyoumongo');
      var col=myDB.collection('parrots');
      var queryArr=col.find(
        {age: { $gt: +process.argv[2] }},{ 'name':0,'_id':0,'age':1
      }).toArray(function(err, documents){
        if(err){console.log(err);}
        console.log(documents);
      });
      db.close();
    });
    
    