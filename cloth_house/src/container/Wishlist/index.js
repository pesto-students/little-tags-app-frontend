import React from "react";
import TopHeader from "../../components/TopHeader";
import SmileBagFooter from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Categories from "../../components/Categories";
import { useSelector } from "react-redux";
export default function Wishlist(props){
const state=useSelector(state=>state);
console.log("Wishlist=======>",state.catdata.wishlist);

return <>
<TopHeader {...props}/>
<Categories {...props}/>
  <ProductList {...props} from="wishlist"/>
  <SmileBagFooter {...props} className={state.catdata.wishlist.items.length>1?"":"positionFixed"}/>
</>
}