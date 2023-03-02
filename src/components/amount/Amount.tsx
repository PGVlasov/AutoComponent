import { useAppSelector } from '../../hooks/redux'
import classes from './Amount.module.css'



export const Amount = () => {
    const productList = useAppSelector(state => state.productSlice)
    const items = productList.products

    const itemsQuantity = items.length
    const totalSum = items.reduce((accum, item) => accum + item.price, 0)

    const str = '' + totalSum;
    const priceSplited = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");

    return (
        <div className={classes.Amount}>
            <div className={classes.AmountOfItems}>{`${itemsQuantity}`} товаров</div>
            <div className={classes.TotalAmount}>На сумму: {`${priceSplited}`} ₽</div>
        </div>
    )
}