module.exports = function(req, res) {
  var data = JSON.parse(req.body.params);
  if (!data) {
    res.status(403 /* Unauthorized */ ).send('Invalid params');
    return;
  }

  var width = data.width > 600 ? 600 : data.width;
  var html  = data.html;
      html += '<style>.legend rect {fill:white;opacity:0.4;}</style>';
  res.json({
    body: html
  });
};