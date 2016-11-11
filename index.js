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

app.get('/names', function (req, res) {
  var fullName = '';
  if(req.query.fullname) {
    var array = req.query.fullname.split(' ');
    if(array.length > 3) {
      fullName = 'Invalid fullname';
    }
    else {
      fullName = array[array.length-1];
      for(var num = 0; num < array.length - 1; num++) {
        fullName += ' ' + array[num].substring(0,1) + '.'
      }
    }
  }
  res.send(fullName);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});