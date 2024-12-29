const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PqARzTBD#byxjsUv7F0qRuQrbM8iSYIoU5a7LN2AW4pe9T0ITEeE", // Add your session id
MONGODB: process.env.MONGODB || "mongodb://mongo:ATUdNXYlCCXxOvdqUlXjWObNPwdkdpib@autorack.proxy.rlwy.net:42669", // Add your mongodb url
};
