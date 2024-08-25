import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allposts:null,
}

const postSlice = createSlice({
    name:"post",
    initialState,
     reducers:{
        feedPost:(state,action)=>{
           state.allposts = action.payload.posts;
        },
        deletePost:(state)=>{
           state.allposts = null;
        }
     }
});

export const {feedPost,deletePost} = postSlice.actions;
export default postSlice.reducer;

