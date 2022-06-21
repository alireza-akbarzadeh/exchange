import React, { createContext, useState, FC } from "react";

type ThemeContextState = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<ThemeContextState>(null);

const AppProvider: FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
