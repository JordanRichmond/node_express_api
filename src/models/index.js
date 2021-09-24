const mongoose = require('mongoose');
const { MongoGridFSChunkError } = require('mongoose/node_modules/mongodb');
const Schema = mongoose.Schema;

const pokedexSchema = new Schema({
    pokemon: {
        type: String,
        required: true
    },
    pokemontype: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const Pokedex = mongoose.model('Pokedex', pokedexSchema);

module.exports = Pokedex;