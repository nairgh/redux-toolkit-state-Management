import {configureStore, createSlice,createAction } from '@reduxjs/toolkit'

export const reset = createAction("app/reset");

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers :{
        addMovie(state, action){
          state.push(action.payload)
        },
        removeMovie(state, action){
         const index = state.indexOf(action.payload)
         state.splice(index,1);
        }
       },
         extraReducers(builder){
            builder.addCase(reset, (state,action)=>{
               return [];
            })
       
        //  reset(state,action){
        //     return []
        // }
    }
})

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers:{
        addSong(state, action){
          state.push(action.payload)
        },
        removeSong(state,action){
         const index = state.indexOf(action.payload);
         state.splice(index, 1);
         }
        },
        extraReducers(builder){ // tell the reduer to watch for extra action types ie combined reducers
         builder.addCase(reset,(state, action)=>{
            return [];
         });
        }
});


const store = configureStore({
    reducer:{
        songs: songsSlice.reducer,
        movies: movieSlice.reducer
    }
})
//console.log(store.getState());

export {store};
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;

//console.log(songsSlice.actions.addSong("Some song !!"))

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//    songsSlice.actions.addSong('Some Song !!')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
