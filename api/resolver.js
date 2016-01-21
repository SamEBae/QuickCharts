module.exports = function(req, res) {
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  var html  = data.html;
  res.json({
    body: html
  });
};