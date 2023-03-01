import { AppProvider } from "./context/AppProvider"
import { Header, Presentation, AboutMe } from './components'

export const App = () => {
  return (
    <AppProvider>
        <Header />
        <Presentation />
        <AboutMe />
    </AppProvider>

  );
};
