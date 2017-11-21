var axios = require("axios");

export default {
    startGame: function (num) {
        return axios.get(`/api/pokedex/game/start/${num}`);
    },
    fillPokedex: function () {
        return axios.get("/api/pokedex/all");
    },
    getUser: function() {
        return axios.get("/api/profile/user")
    },
    saveCookie: function(userData){
        return axios.post("/api/profile/user", userData);
    }, 
    getHighScores: function(){
        return axios.get("/api/profile/highscore");
    }
    // authLogin: function (){
    //      return axios.get("/api/auth/google");
    // }
    // authLogout: function(){
    //     return axios.get("/api/auth/logout");
    // },
  
}