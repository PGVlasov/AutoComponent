import React, { ButtonHTMLAttributes, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import classes from "./Button.module.css";



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, disabled } = props;
    const [clicked, setClicked] = useState(false)

    const productList = useAppSelector(state => state.productSlice)
    const items = productList.products

    const clickHandler = (event: React.MouseEvent) => {
        event.preventDefault()
        setClicked(true)
    }

    if (items.length === 0) {
        return (<button
            className={classes.Button__notActive}
            disabled={disabled}
            onClick={(event) => clickHandler(event)}
        >
            <p className={classes.ButtonText}>
                {children}
            </p>
        </button>)
    }
    return clicked ? (<button
        className={classes.Button__pressed}
        disabled={disabled}
        onClick={(event) => clickHandler(event)}
    >
        <p className={classes.ButtonText}>
            {children}
        </p>
    </button>) : (<button
        className={classes.Button}
        disabled={disabled}
        onClick={(event) => clickHandler(event)}
    >
        <p className={classes.ButtonText}>
            {children}
        </p>
    </button>)
}