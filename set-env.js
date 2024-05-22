const fs = require('fs');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const envFilePath = './src/environments/environment.railway.ts';
const envFileContent = `
export const environment = {
  production: true,
  inviteNexusBot: '${process.env.inviteNexusBot}'
};
`;

fs.writeFileSync(envFilePath, envFileContent);
