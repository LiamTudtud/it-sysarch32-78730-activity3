import React from 'react';

const typeColors = {
  'Grass': '#e6b68e',
  'Fire': '#e6b68e',
  'Water': '#e6b68e',
  'Bug': '#e6b68e',
  'Normal': '#e6b68e',
  'Poison': '#e6b68e',
  'Flying': '#e6b68e',
  'Electric': '#e6b68e',
  'Ground': '#e6b68e',
  'Fairy': '#e6b68e',
  'Fighting': '#e6b68e',
  'Psychic': '#e6b68e',
  'Rock': '#e6b68e',
  'Steel': '#e6b68e',
  'Ice': '#e6b68e',
  'Ghost': '#e6b68e',
  'Dragon': '#e6b68e',
  
};

const Pokemon = ({ pokemon, language }) => {
  const displayName = pokemon.name[language];

  return (
    <div className="pokemon">
      <img src={pokemon.image} alt={displayName} />
      <p>ID: {pokemon.id}</p>
      <p>Name: {displayName}</p>
      <div className="type-container">
        {pokemon.type.map((type, index) => (
          <span key={index} className="type" style={{ backgroundColor: typeColors[type] }}>{type}</span>
        ))}
      </div>
      <div className="stats-container">
        <div className="stats-column">
          <p>HP: {pokemon.base.HP}</p>
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
        </div>
        <div className="stats-column">
          <p>Speed: {pokemon.base.Speed}</p>
          <p>Sp. Attack: {pokemon.base['Sp. Attack']}</p>
          <p>Sp. Defense: {pokemon.base['Sp. Defense']}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;