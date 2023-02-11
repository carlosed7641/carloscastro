import { Header } from "./components/Header";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
};
