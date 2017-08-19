const initialState = {
  isOn: false,
  time: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "Start":
      return {
         ...state,
        isOn: true,
      };
    case "Tick":
    if (state.isOn) {
       return {
         ...state,
        time: state.time + 10
      };
    }else{
      return state
    };
     
    case "Stop":
      return {
         ...state,
        isOn: false
      };
    case "Reset":
      return {
         ...state,
        isOn: false,
        time: 0
      };
    default:
      return state
  }
}

export default reducer;