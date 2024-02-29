import {useEffect} from 'react';

const Filter = ({activeGenre, setActiveGenre, setFiltered, popular}) => {

  useEffect(() => {
    if(activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre]);

  return(
    <div className='filter-container'>
    <button className={activeGenre === 0 ? 'active' : ''}
      onClick={() => setActiveGenre(0)}>
   all
    </button>
      <button className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}>
      comedy
      </button>
      <button className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}>
      action
      </button>
    </div>
  )
}

export default Filter;