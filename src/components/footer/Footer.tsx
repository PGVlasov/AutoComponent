import { Amount } from '../amount/Amount'
import { Button } from '../button/Button'
import classes from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={classes.Footer}>
            <Amount />
            <Button>Перейти в корзину</Button>
        </div>)
}