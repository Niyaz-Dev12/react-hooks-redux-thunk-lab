// write your CatList component here
import React from 'react';

function CatList({ catPics }) {
  const catsArr = catPics.map((cat) => (
    <img key={cat.id} src={cat.url} alt="cat" />
  ));
  return <div>{catsArr}</div>;
}

export default CatList;
