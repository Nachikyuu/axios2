// Description: This file contains the API service that fetches Pokémon data from the PokeAPI.

import axios from 'axios';
import { Pokemon } from '../types/pokemon';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const POKEMON_LIMIT = 151; // Increased limit to get more Pokémon

export const fetchPokemonData = async (): Promise<Pokemon[]> => {
    try {
        const response = await axios.get(`${API_URL}?limit=${POKEMON_LIMIT}`);
        const { results } = response.data;
        
        // Show loading progress in console
        console.log(`Fetching detailed data for ${results.length} Pokémon...`);
        
        // Fetch detailed data for each Pokemon
        const detailedPokemon = await Promise.all(
            results.map(async (pokemon: { name: string, url: string }, index: number) => {
                if (index % 50 === 0) {
                    console.log(`Fetching Pokémon ${index + 1} to ${Math.min(index + 50, results.length)}...`);
                }
                const detailResponse = await axios.get(pokemon.url);
                return {
                    id: detailResponse.data.id,
                    name: detailResponse.data.name,
                    types: detailResponse.data.types,
                    sprites: detailResponse.data.sprites
                };
            })
        );
        
        console.log('Finished fetching all Pokémon data!');
        return detailedPokemon;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error;
    }
};