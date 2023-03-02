import { FC } from 'react'
import { CartIcon } from "../cartSvg/cartSvg";
import classes from "./CartItem.module.css";

interface ICartItem extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    amount: number
    price: number
}

export const CartItem: FC<ICartItem> = (props) => {
    const { title, amount, price } = props

    const str = '' + price;
    const priceSplited = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    return (
        <div className={classes.CartWripper}>
            <div className={classes.CartItem}>
                <p className={classes.Discription}>{title}</p>
                <p className={classes.Quantity}>{`${amount}шт`}</p>
                <p className={classes.Price}>{`${priceSplited}`} ₽</p>
                <CartIcon />
            </div>
            <hr className={classes.Hr} />
        </div>
    )
}