import { THEME_MODE } from "../constants/themeConstant"

export const toggleActionTheme = () => (dispatch) => {
    dispatch({ type: THEME_MODE })
}