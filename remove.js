var mongo=require('mongodb').MongoClient;

//console.log(process.argv);
mongo.connect('mongodb://localhost:27017/'+process.argv[2], function(err, db) {
  if (err){throw err;}
  var myDB=db.db('learnyoumongo');
  var col=myDB.collection(process.argv[3]);
  col.remove({
    _id:process.argv[4]
  }, function(err, data){
    if (err){console.log(err)}
    console.log(JSON.stringify(data));
  })
  db.close();
});
