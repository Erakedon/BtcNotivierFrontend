import React from 'react';

const TransactionBlock = props => {
    return ( 
        <div className="TransactionBlock">
            <div className={"iconBox " + props.additionalClassName}>
                {props.confirmationsNumber >= 4 ? (<i className="far fa-check-circle"></i>) : (<i className="fas fa-hourglass-half"></i>)}
            </div>
            <div className="data">
                <div className="type">Transaction hash</div>
                <div className="value">{props.txIndex}</div>
            </div>
            <div className="data">
                <div className="type">Confirmations</div>
                <div className="value">{props.confirmationsNumber}</div>
            </div>
            <div className="data">
                <div className="type">Bitcoins (Satoshis) send</div>
                <div className="value">{props.btcOut}</div>
            </div>
        </div>
     );
}
 
export default TransactionBlock;