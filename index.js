/**
 * Created by alessanderrr on 09.11.16.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var sum = 0;
  if(req.query.a) {
    sum += parseInt(req.query.a);
  }
  if(req.query.b) {
    sum += parseInt(req.query.b);
  }
  res.send('sum: ' + sum);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});