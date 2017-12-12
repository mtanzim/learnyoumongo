var mongo=require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err){throw err;}
  var myDB=db.db('learnyoumongo');
  var col=myDB.collection('parrots');
  //console.log(col.find());
  col.count({
    age: { $gt: +process.argv[2] }
  },function(err, count){
    if(err){console.log(err);}
    console.log(count);
  });
  db.close();
});

    