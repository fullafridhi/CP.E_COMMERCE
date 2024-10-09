import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from 'axios'



 

export const GetPeoducts = createAsyncThunk('Products',
async(data,{rejectedWithValue})=>{
try{
const res = await axios.get('/user/getproducts')
return res.data;

}
catch(error){
  return rejectedWithValue(error.response.data.msg)

}

});



    const ProductSlice = createSlice({
      name :'product',
      initialState:{
        isLoading : false,
        error: null,
        products:[]
       
      },

      reducers:{
        
        

      },
      extraReducers:{
        [GetPeoducts.pending]:(state)=>
          {state.isLoading = true},
        
        [GetPeoducts.fulfilled]:(state,action)=>{
           state.error = null;
            state.products = action.payload.products;
            state.isLoading = false
          
        },

        [GetPeoducts.rejected]:(state,action)=>{
        state.error = action.payload;
        state.isLoading = false; 
       
        },
       
    }
    })



    export default ProductSlice.reducer;
    // export const {logout} = UserSlice.actions;
