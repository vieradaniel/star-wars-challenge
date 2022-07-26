import React from "react";

import { CharacterCard } from "./CharacterCard";

export const CharacterList = ({ characters, loading, error }) => {
  return (
    <>
      <h1 className="text-center p-2">Star Wars Characters</h1>

      <hr />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
         { characters?.map((character) => {
            return <CharacterCard key={character?.name} {...character} />;
          })}
        </div>
      )}

    </>
  );
};
