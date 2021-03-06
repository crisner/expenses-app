import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{numeral(amount/100).format('0,0.00')}</p>
        <p><small>{note ? note : null}</small></p>
        <p><small>{moment(createdAt).format('ll')}</small></p>    
    </div>
);

export default ExpenseListItem;