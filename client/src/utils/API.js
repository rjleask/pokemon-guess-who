var axios = require("axios");

export default {
    startGame: function (num) {
        return axios.get(`/api/pokedex/game/start/${num}`);
    },
    fillPokedex: function () {
        return axios.get("/api/pokedex/all");
    }
    // authLogin: function (){
    //      return axios.get("/api/auth/google");
    // }
    // authLogout: function(){
    //     return axios.get("/api/auth/logout");
    // },
    // googleAuth: function() {
    //     return axios.get("/api/auth/google");
    // },
    // googleAuthRedirect: function() {
    //     return axios.get("/api/auth/google/redirect");
    // },
    // getProfile: function() {
    //     return axios.get("/api/profile/");
    // }

}