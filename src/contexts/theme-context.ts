import { createContext } from "react";

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

export const ThemeContext = createContext<Theme>(Theme.Light);