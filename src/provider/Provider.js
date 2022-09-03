import React, {createContext, useState} from 'react';

const GlobalContext = createContext({});

const Provider = ({store, children}) => {
  const [state, setState] = useState(store.state);

  return (
    <GlobalContext.Provider
      value={{
        state,
        setState,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
