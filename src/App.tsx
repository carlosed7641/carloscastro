import { AppProvider } from "./context/AppProvider"
import { Header, Presentation, AboutMe, Skills } from './components'

export const App = () => {
  return (
    <AppProvider>
        <Header />
        <Presentation />
        <AboutMe />
        <Skills />
    </AppProvider>

  );
};
