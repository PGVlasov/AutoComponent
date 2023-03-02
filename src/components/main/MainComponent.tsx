import { FC } from 'react'
import { CartItemList } from "../cartItem/CartItemList";
import { Footer } from "../footer/Footer";
import classes from "./MainComponent.module.css";


export const MainComponent = () => {
    return (
        <div className={classes.MainComponent}>
            <CartItemList />
            <Footer />
        </div>
    )
}