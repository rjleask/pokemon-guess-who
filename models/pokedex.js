const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokedexSchema = new Schema({
    pokeId: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    pokeType: {
        type: [String],
        required: true
    },
    stages: {
        type: [String],
        required: true
    },
    evolution: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }
});

const Pokedex = mongoose.model("Pokedex", pokedexSchema);

module.exports = Pokedex;
