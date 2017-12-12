var mongo=require('mongodb').MongoClient;

//console.log(process.argv);
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err){throw err;}
  var myDB=db.db('learnyoumongo');
  var col=myDB.collection('users');
  col.update({
    name:'Tina'
  },{
    $set:{age:40}
  }, function(err, data){
    if (err){console.log(err)}
    console.log(JSON.stringify(data));
  })
  db.close();
});
