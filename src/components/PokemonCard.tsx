import React from 'react';
import { Pokemon } from '../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>#{pokemon.id.toString().padStart(3, '0')}</p>
      <div className="pokemon-types">
        {pokemon.types.map(type => (
          <span key={type.type.name} className={`type-badge type-${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;