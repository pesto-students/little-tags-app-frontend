import React from "react";
import TopHeader from "../../components/TopHeader";
import SmileBagFooter from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Categories from "../../components/Categories";
import { useSelector } from "react-redux";
import EmptyCart from "../../components/EmptyPage"
export default function Wishlist(props){
const state=useSelector(state=>state);
return <>
<TopHeader {...props}/>
<Categories {...props}/>
 {state.catdata.wishlist.items.length?
 <ProductList {...props} from="wishlist"/>:<EmptyCart {...props} from="wishlist"/>

} 
  <SmileBagFooter {...props} className={state.catdata.wishlist.items.length>1?"":"positionFixed"}/>
</>
}