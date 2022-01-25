const SET_tOURES = 'SETTOURESAC'
const SET_BUS = 'SET_BUSAC'

let initialState = {
    toures:[],
    bus:[]
}

let reducers = (state = initialState,action) =>{
    switch(action.type){
        case SET_tOURES:
            return{
                toures:action.toures
            }
        case SET_BUS:
            return{
                bus:action.bus
            }    
        default:
            return state    
    }
}

export let setToures = (toures) =>{
    return{
        type:'SETTOURESAC', toures
    }
}
export let setBus = (bus) =>{
    return{
        type:'SET_BUSAC', bus
    }
}
export default reducers;