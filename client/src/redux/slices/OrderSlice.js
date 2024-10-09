import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'



 

export const CreateOrder = createAsyncThunk('ordre/PostOrder ',
async(data,{rejectedWithValue})=>{
try{
const res = await axios.post('/user/createorder',data,

  {
  headers:{
    token:localStorage.getItem('token')
  }
})
return res.data;
}
catch(error){
  return rejectedWithValue(error.response?.data?.msg || 'Something went wrong')

}

});



    const OrderSlice = createSlice({
      name :'order',
      initialState:{
        isLoading : false,
        error: null,
        orders:[]
       
      },

      
      extraReducers:{
        [CreateOrder.pending]:(state)=>
          {state.isLoading = true},
        
        [CreateOrder.fulfilled]:(state,action)=>{
           state.error = null;
            state.isLoading = false
            state.orders.push(action.payload); // Add new order to the list
          
        },

        [CreateOrder.rejected]:(state,action)=>{
        state.error = action.payload;
        state.isLoading = false; 
       
        },
       
    }
    })



    export default OrderSlice.reducer;
    
