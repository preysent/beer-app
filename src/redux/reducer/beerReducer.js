
const beerReducer = (beer = [], action)=>{
    switch (action.type){
        case "setBeer":
            return beer = action.payload
        default:
            return beer
    }

}

export default beerReducer