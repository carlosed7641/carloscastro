import { Header } from "./components/Header"
import { AppProvider } from "./context/AppProvider"
import { Presentation } from './components/Presentation'

export const App = () => {
  return (
    <AppProvider>
        <Header />
        <Presentation />
    </AppProvider>

  );
};
