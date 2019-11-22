import React from 'react';

const Activities = {
    addressAdd: {
        icon: (<i className="fas fa-plus-circle" key="addressAdd" />),
        info: "Address added"
    },
    addressDelete: {
        icon: (<i className="fas fa-trash-alt" key="addressDelete" />),
        info: "Address removed"
    },
    error: {
        icon: (<i className="fas fa-exclamation-triangle" key="error" />),
        info: "Server error"
    },
    alreadyAdded: {
        icon: (<i className="fas fa-exclamation-triangle" key="alreadyAdded" />),
        info: "Address already added"
    }
}

export default Activities;