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
      return axios.get("/api/profile/all/highscore");
    },
    getUserInfo: function() {
      return axios.get(`/api/profile/user/unique`);
    },
    updateGameWin: function(userData) {
      return axios.post("api/profile/user/id", userData);
    }
}