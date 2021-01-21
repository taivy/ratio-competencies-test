// import response from '../helpers/response';

exports.getResults = function(req, res) {
  console.log("1!11!!1");
  console.log(req.body);

  res.json({ message: 'User successfully deleted' });
};

