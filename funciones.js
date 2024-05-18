const ip = require("ip");

const consultarEncabezado = (req) => {
  // Obtener la dirección IP
  const ipaddress = ip.address();

  // Obtener el idioma preferido
  const language = req.headers["accept-language"];

  // Obtener el agente de usuario
  const userAgent = req.headers["user-agent"];

  // Crear el objeto con los datos
  const clientData = {
    ipaddress: ipaddress,
    language: language,
    software: userAgent,
  };

  return clientData;
};

module.exports = consultarEncabezado;
