import React, { useContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Eu sou estilizado pelo tema do contexto!
    </button>
  );
}

export default function UseContextTeste() {
  return (
    <div>
      <h1>UseContextTeste</h1>
      <ThemedButton />
    </div>
  )
}
