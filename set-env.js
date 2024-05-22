const fs = require('fs');

const envFilePath = './src/environments/environment.railway.ts';
const envFileContent = `
export const environment = {
  production: true,
  inviteNexusBot: '${process.env.inviteNexusBot}'
};
`;

fs.writeFileSync(envFilePath, envFileContent);