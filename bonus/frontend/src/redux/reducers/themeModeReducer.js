import { THEME_MODE } from "../constants/themeConstant";


// export const modeReducer = (state = { mode: "light" }, action) => {
//     switch (action.type) {
//         case THEME_MODE:
//             //return { state.mode = mode === "light" ? "dark" : "light" }
//             //return state.mode = state.mode === "light" ? "dark" : "light";
//             return { ...state, mode: "light" ? "dark" : "light" };
//         default:
//             return state;
//     }

// }

export const modeReducer = (state = { toggleActive: true }, action) => {
    switch (action.type) {
        case THEME_MODE:
            return {
                ...state,
                toggleActive: !state.toggleActive,
                mode: state.toggleActive ? "light" : "dark"
            };

        default:
            return state;
    }

}

