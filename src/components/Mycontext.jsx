import { createContext } from 'react';

const MyContext = createContext({
  hamburgerClick: false,
  toggleClick: () => {},
});

export default MyContext;
