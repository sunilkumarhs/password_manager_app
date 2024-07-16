import Body from "./app/Body";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Body />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
