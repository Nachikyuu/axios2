import React from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types/pokemon';

interface PokemonListProps {
    pokemonList: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
    if (!pokemonList.length) {
        return <div>No Pokémon found</div>;
    }

    return (
        <div className="pokemon-grid">
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;