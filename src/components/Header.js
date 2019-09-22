import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h2>Expenses</h2>
        <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
);

export default Header;