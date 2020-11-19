

let initialState= {
    test: ''
}

let FirstReducer = (state=initialState, action) => {
    switch(action.type){
        case "changeTest":
            return{
                ...state,
                test: "I think I finally got Redux working"
            }
        
        default:
            return state
    }
}

export default FirstReducer