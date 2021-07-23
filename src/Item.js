import React from 'react';
import './Item.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Item({item}) {
    return (
        <div className="item">
            <span>{item.name}</span>
            <span>{item.address.country}</span>
            <span>{item.address.city}</span>
            <span className={item.status}>{item.status}</span>
            <span>{item.code}</span>
            <div>
             <EditIcon/>
             <DeleteOutlineIcon/>
            </div>
        </div>
    )
}

export default Item
