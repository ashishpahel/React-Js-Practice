## Notes : -

### context API :

eiske 3 steps hote h

- createContext() => sabse phela hm context create kre gya

```jsx
import React, { createContext } from "react";

// Create the context
export const ThemeContext = createContext();
```

- Provider => and fir hm provider create kre gya and usko kise component ko user krne k liye da gya and use component k sabhi child component bhi use ko use kr skte h .
  hm proivder k ander state and function dono likh skte h

```jsx
// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  const value = {
    theme,
    lightTheme,
    darkTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
```

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

- consume => now we can access the ThemeContext in all the child component of App

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeBtn() {
  const { theme, lightTheme, darkTheme } = useContext(ThemeContext);
}
```
