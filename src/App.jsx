import Body from "./app/Body";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ContextWrapper from "./contexts/ContextWrapper";

function App() {
  return (
    <>
      <ContextWrapper>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Body />
          <Toaster />
        </ThemeProvider>
      </ContextWrapper>
    </>
  );
}

export default App;
