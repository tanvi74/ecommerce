import React from 'react'

export default function OrderDetails(props) {
    const orderId = props.match.params.orderId;
    return (
        <div>
            {orderId}
        </div>
    )
}
