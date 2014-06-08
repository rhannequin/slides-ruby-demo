var express = require('express')
  , path = require('path')
  , app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', function(req, res) {
  res.render('index.html')
})
app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port)
})
