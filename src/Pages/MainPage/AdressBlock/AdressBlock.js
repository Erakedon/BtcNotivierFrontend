import React from 'react';

const AdressBlock = props => {
    return ( 
        <div className="AdressBlock">
            <div className="adress" onClick={props.onAdressClick}>{props.adress}</div>
            <i className="fas fa-trash-alt" onClick={props.onDeleteClick} />
        </div>
     );
}
 
export default AdressBlock;