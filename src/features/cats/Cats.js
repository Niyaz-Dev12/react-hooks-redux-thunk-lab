import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCats } from './catsSlice';
import CatList from './CatList';

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const loading = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div>
      <h1>CatBook</h1>
      {/* test didn't run with the loading so i removed the bonus part */}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
