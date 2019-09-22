import React, { Component } from 'react';

export default class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: 0
    }

    onDescriptionChange = (e) => {
        console.log(e.target.value);
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    }

    onNoteChange = (e) => {
        console.log(e.target.value);
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    }

    onAmountChange = (e) => {
        console.log(e.target.value);
        const amount = parseInt(e.target.value);
        this.setState(() => ({
            amount
        }));
    }

    render() {
        console.log(this.state);
        return (
            <form>
                <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange} />
                <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                <textarea placeholder="Enter note(optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                <button>Submit</button>
            </form>
        );
    }
}