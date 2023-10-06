const redux =require('redux');
const createStore = redux.createStore

const BUY_CAKE='BUY_CAKE'

function buyCake() {
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}

const initialState={
    numOfCakes:30
}

const reducer = (state =initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

const store = createStore(reducer)
console.log('initialState',store.getState)
const unsubscribe=store.subscribe(() => console.log('update state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()