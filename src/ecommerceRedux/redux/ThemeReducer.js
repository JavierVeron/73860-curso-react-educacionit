const ThemeReducer = (state = false, action) => {
    switch(action.type) {
        case "SWITCH_DARK_MODE":
            return state ? false : true;
        default:
            return state;
    }
}

export default ThemeReducer