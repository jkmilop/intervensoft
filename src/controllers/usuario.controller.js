const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const handleError = require('../utils/errorHandler.js');
const Usuario = require('../models/usuario.js');  

const allowedRoles = ['2', '4'];

const register = async (req, res) => {
  const { usuario, contraseña, correo, id_rol } = req.body;  
  try {
    // Solo permitir roles Interventor y Administrador
    if (!allowedRoles.includes(id_rol)) {
      return res.status(400).json({ message: 'Invalid user role' });
    }
    const existingUser = await Usuario.findOne({ where: { usuario } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = await Usuario.create({
      usuario,
      contraseña: hashedPassword,
      correo,
      id_rol,
    });

    // No devolver la contraseña
    const userResponse = {
      id: newUser.id,
      usuario: newUser.usuario,
      correo: newUser.correo,
      id_rol: newUser.id_rol
    };
    res.json(userResponse);
  } catch (error) {
    handleError(res, error);
  }
};

const login = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const user = await Usuario.findOne({ where: { usuario } });
    if (!user || !(await bcrypt.compare(contraseña, user.contraseña))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      {
        usuario: user.usuario,
        usuarioId: user.id,
        id_rol: user.id_rol
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Establecer cookie httpOnly
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // solo HTTPS en producción
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hora
      path: "/"
    });

    res.status(200).json({ id_rol: user.id_rol }); // Ya no se envía el token por JSON

  } catch (error) {
    handleError(res, error);
  }
};
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/"
  });
  res.json({ message: "Logout successful" });
};

module.exports = {
  register,
  login,
  logout,
};