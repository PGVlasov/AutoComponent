import { FC } from 'react'
import { useAppSelector } from "../../hooks/redux";
import { IProduct } from '../../models/IProduct';
import { CartItem } from "./CartItem";
import classes from "./CartItem.module.css";

export const CartItemList: FC = () => {
    const productList = useAppSelector(state => state.productSlice)
    const items = productList.products
    return (
        <div className={classes.CartItemList}>
            {items.map((item) => {
                return (<CartItem key={item.id} title={item.title} price={item.price} amount={item.amount} />)
            })};
        </div>
    )
}