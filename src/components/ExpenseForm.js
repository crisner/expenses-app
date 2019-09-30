import React, { Component } from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

export default class ExpenseForm extends Component {
    state = {
        description: this.props.description || '',
        note: this.props.note || '',
        amount: (this.props.amount && (this.props.amount/100).toString()) || '',
        createdAt: (this.props.createdAt && moment(this.props.createdAt).toDate()) || moment().toDate(),
        isEmpty: true,
        isDisabled: false,
        validDate: true,
        error: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt, modifiers, dayPickerInput) => {
        
        if(createdAt) {
            this.setState({
                createdAt,
                validDate: true,
                error: ''
            });
        } else {
            this.setState(() => ({ 
                validDate: false,
                error: 'Please provide a valid date'
            }));
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { description, amount, createdAt, note } = this.state;
        if(!this.state.validDate) return;
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please add a description and an amount'}));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                note
            })
        }
    }


    render() {
        const { description, amount, note, createdAt, error } = this.state;
        
        return (
            <div>
                <div>
                    { error && <p>{ error }</p> }
                </div>
                <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Description" value={description} onChange={this.onDescriptionChange} autoFocus />
                <input type="text" placeholder="Amount" value={amount} onChange={this.onAmountChange} />
                <DayPickerInput 
                formatDate={formatDate}
                parseDate={parseDate}
                format="ll"
                placeholder={`${moment(createdAt).format('ll')}`}
                value={createdAt}
                onDayChange={this.onDateChange}
                dayPickerProps={{
                    createdAts: createdAt,
                }} />
                <textarea placeholder="Enter note(optional)" value={note} onChange={this.onNoteChange}></textarea>
                <button>Add Expense</button>
            </form>
            </div>
        );
    }
}