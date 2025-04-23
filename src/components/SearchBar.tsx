import React from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search Pokémon..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;