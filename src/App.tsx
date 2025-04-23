import React, { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import { fetchPokemonData } from './services/api';
import { Pokemon } from './types/pokemon';
import './App.css';

const App: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                setIsLoading(true);
                const data = await fetchPokemonData();
                setPokemon(data);
            } catch (err) {
                setError('Failed to fetch Pokémon data. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        getPokemonData();
    }, []);

    const filteredPokemon = pokemon.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedType && selectedType !== 'all' ? p.types.some(type => type.type.name === selectedType) : true)
    );

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilterChange = (type: string) => {
        setSelectedType(type === 'all' ? null : type);
    };

    if (isLoading) {
        return (
            <div className="app-container">
                <h1>Pokédex</h1>
                <div className="loading">Loading Pokémon data...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app-container">
                <h1>Pokédex</h1>
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="app-container">
            <h1>Pokédex</h1>
            <div className="controls-container">
                <SearchBar onSearch={handleSearch} />
                <FilterBar onFilterChange={handleFilterChange} />
            </div>
            <div className="pokemon-count">
                Showing {filteredPokemon.length} of {pokemon.length} Pokémon
            </div>
            <PokemonList pokemonList={filteredPokemon} />
        </div>
    );
};

export default App;