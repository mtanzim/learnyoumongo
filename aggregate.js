var mongo=require('mongodb').MongoClient;
//console.log(process.argv);
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err){throw err;}
  var myDB=db.db('learnyoumongo');
  var col=myDB.collection('prices');
  //console.log(col.find());
  col.aggregate([
    {$match: {size: process.argv[2]}},
    {$group: {_id:'average',avgPrice:{$avg:'$price'}}}
    ]).toArray(function(err,results){
      if(err){throw err};
      console.log(Number(results[0].avgPrice).toFixed(2));
    });
  /*
  col.count({
    age: { $gt: +process.argv[2] }
  },function(err, count){
    if(err){console.log(err);}
    console.log(count);
  });
  */
  db.close();
});

    