const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedToken
    next();
  } catch (err) {
    console.log('auth error : ', err);
    return res.status(401).json({ message : "Auth Failed"})
  }
}