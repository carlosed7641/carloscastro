import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AppContextProps } from "../../interfaces";

type ThemeButtonProps = {
    text?: string
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ text }) => {

    const { isDarkMode, setIsDarkMode } = useContext<AppContextProps>(AppContext);

    return (
        <li onClick={() => setIsDarkMode(!isDarkMode)}>
            <p
                className="theme-mode"
                title={isDarkMode ? "Modo claro" : "Modo oscuro"}
            >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} width={16}/>
                {' '}{text}
            </p>
        </li>
    );
};
