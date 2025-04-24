const jwt = require('jsonwebtoken');

const hasRole = (...allowedRoles) => (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: 'Access Denied' });
  }
  try {
    const decodedToken = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    const userRole = decodedToken.rol;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access Denied' });
    }
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Access Denied' });
  }
};

module.exports = hasRole;