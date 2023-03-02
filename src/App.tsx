import { AppProvider } from "./context/AppProvider"
import { Header, Presentation, AboutMe, Skills, Projects } from './components'

export const App = () => {
  return (
    <AppProvider>
        <Header />
        <Presentation />
        <AboutMe />
        <Skills />
        <Projects />
    </AppProvider>

  );
};
