import Body from "./app/Body";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Body />
      </ThemeProvider>
    </>
  );
}

export default App;
