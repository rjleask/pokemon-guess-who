var axios = require("axios");

export default {
    startGame: function (num) {
        return axios.get(`/api/pokedex/game/start/${num}`);
    },
    fillPokedex: function () {
        return axios.get("/api/pokedex/all");
    }
}