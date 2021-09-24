import { v4 as uuidv4 } from 'uuid';

let users = [
    //    {
    //     "pokemonName": "Charmander",
    //     "pokemonType": "Fire",
    //     "pokemonRarity": "Super Rare",
    //    }
    //      *** add these to POST on ThunderClient to add Pokemon to PokeDex ***
    ];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`Pokemon with the name ${user.pokemonName} added to the Pokedex!`);
};

export const getUser = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`Pokemon with the ID ${id} deleted from the Pokedex.`);
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const { pokemonName, pokemonType, pokemonRarity } = req.body;

    const user = users.find((user) => user.id === id);

    if(pokemonName) user.pokemonName = pokemonName;
    if(pokemonType) user.pokemonType = pokemonType;
    if(pokemonRarity) user.pokemonRarity = pokemonRarity;

    res.send(`Pokemon with the ID ${id} has been updated.`);
};