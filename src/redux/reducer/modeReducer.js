const modeReducer = (mode="light",action)=>{
    if(action.type == "toggleMode"){
        return( mode === "dark") ? "light":"dark"
    }
    return mode
}


export default modeReducer