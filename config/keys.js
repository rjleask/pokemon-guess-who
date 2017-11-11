// add this file to .gitignore

module.exports = {
        google: {
            clientID: '124016383603-tbo3h4qnrhr1tjo10abbrsbqjdbregdm.apps.googleusercontent.com',
            clientSecret: 'W-s72KG_zDQSHjcgqhecRSAh'
        },
        // database connection
        mongodb: {
            dbURI: 'mongodb://iamshaunjp:test@ds151024.mlab.com:51024/oauth-test',
            myDB: 'mongodb://localhost/pokemon'
        },
        // encript cookie key
        session: {
            cookieKey: 'encryptedcookie'
        }
};
