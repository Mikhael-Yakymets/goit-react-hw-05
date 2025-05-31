import { NavLink } from 'react-router-dom';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <p>Hallo Sania</p>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default App;
