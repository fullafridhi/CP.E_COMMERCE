import{configureStore} from '@reduxjs/toolkit'
import ProductSlice from './slices/ProductSlice'
import PanierSlice from './slices/PanierSlice';
import UserSlice from './slices/UserSlice';












export default configureStore({reducer:{user:UserSlice,products:ProductSlice,panier:PanierSlice}})