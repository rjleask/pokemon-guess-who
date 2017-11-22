// add this file to .gitignore

module.exports = {
  google: {
      clientID: '124016383603-tbo3h4qnrhr1tjo10abbrsbqjdbregdm.apps.googleusercontent.com',
      clientSecret: 'W-s72KG_zDQSHjcgqhecRSAh'
  },
  // database connection
  mongodb: {
    //   myDB: 'mongodb://localhost/pokemon'
      myDB: 'mongodb://localhost/pokemonguesswhodb'
  },
  // encript cookie key
  session: { 
      cookieKey: 'encryptedcookie'
  }
};
