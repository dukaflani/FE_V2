import { useState, createContext, useContext } from 'react';


export const NavigationContext = createContext({value: 0});
export const UpdateNavigationContext = createContext(null)


export function useNavigation() {
  return useContext(NavigationContext)
}

export function useNavigationUpdate() {
  return useContext(UpdateNavigationContext)
}



export const NavigationContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  function navigateBottomTab (event, newValue) {
    setValue(newValue)
  }

  return (
    <NavigationContext.Provider value={value}>
      <UpdateNavigationContext.Provider value={navigateBottomTab}>
        {children}
      </UpdateNavigationContext.Provider>
    </NavigationContext.Provider>
  );
};