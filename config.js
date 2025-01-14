const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=73oCVBjI#KxdRqRiX1kauzlwts78bZ9eEO2VTTcr9sKdaikI5BEE',
    MONGODB: process.env.MONGODB || 'mongodb+srv://udavin56:1234@cluster0.urhma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
};
