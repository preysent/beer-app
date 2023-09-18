export const toggleMode =()=>{ 
   return {
        type:"toggleMode"
    }
  }

export const searchBeer = (str)=>{
    return async(dispatch, state)=>{
      console.log(state())
      
      console.log("berin")
        const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${str}`)
        const data = await res.json()

        console.log("inter :",data)
        dispatch({
          type:"setBeer",
          payload:data
        })
    }
}



export const fetchBeer = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://api.punkapi.com/v2/beers/random");
      const data = await res.json();
      dispatch({
        type: "setBeer",
        payload: data,
      });
    } catch (error) {
      console.log("error :",error)
    }
  };
};
