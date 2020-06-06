import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <div style={ {textAlign: "center", margin: "10px 0 20px"} } >Current Price: <strong>{props.price.toFixed(2)}</strong></div>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            /> 
        ))}
        <div style={ {textAlign: "center"} }>
            <button 
                className={styles.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    </div>
);

export default buildControls;