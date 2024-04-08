const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.js'); // Update the model import

const handleError = (res, error) => {
  console.error('Error:', error);
  return res.status(500).json({ message: 'Internal Server Error' });
};

const register = async (req, res) => {
  const { usuario, contraseña, correo, rol } = req.body; // Update field names

  try {
    if (!['Supervisor', 'Interventor/Operario', 'Coordinador', 'Administrador'].includes(rol)) {
      return res.status(400).json({ message: 'Invalid user role' });
    }
    const existingUser = await Usuario.findOne({ where: { usuario } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10); // Update field name
    const newUser = await Usuario.create({
      usuario,
      contraseña: hashedPassword, // Update field name
      correo,
      rol,
    });

    res.json(newUser);
  } catch (error) {
    handleError(res, error);
  }
};

const login = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const user = await Usuario.findOne({ where: { usuario } });
    if (!user || !(await bcrypt.compare(contraseña, user.contraseña))) { // Update field name
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ usuarioId: user.id, rol: user.rol }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ token, rol: user.rol });
  } catch (error) {
    handleError(res, error);
  }
};

const logout = (req, res) => {
  res.clearCookie('jwtToken'); // Assuming the token is stored in a cookie
  res.json({ message: 'Logout successful' });
};

module.exports = {
  register,
  login,
  logout,
};
