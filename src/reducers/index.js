export default (state = 0, action) => {
  switch (action.type) {
      case "INCREMENT":
          console.log("sdfsdfsd")
          return state + 1
      case "DECREMENT":
          return state - 1
      case "UNMOUT_COUNTER": 
          return state - action.count
      default:
          return state
  }
}