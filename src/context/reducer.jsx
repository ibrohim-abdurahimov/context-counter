export const initialState = {
    count: 0,
    boolen: false,
    text: "hi",
    color: false
}

export const reducer = (state, action)=> {
    switch(action.type){
        case "INC":
            return {...state, count: state.count + action.payload}
        case "DEC":
            return {...state, count: state.count - 1}
        case "TOGL":
            return {...state, boolen: !state.boolen}
        case "BG":
            return {...state, color: !state.color}
        default:
            return state
    }

}