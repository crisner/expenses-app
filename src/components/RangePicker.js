import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStartDate, setEndDate } from '../actions/filters';
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

export class RangePicker extends Component {
    state = {
        from: moment(this.props.filters.startDate).toDate(),
        to: moment(this.props.filters.endDate).toDate(),
    };

    showFromMonth = () => {
        const { from, to } = this.state;
        if (!from) {
          return;
        }
        if (moment(to).diff(from, 'months') < 2) {
          this.to.getDayPicker().showMonth(from);
        }
    };
    
    handleFromChange = (from) => {
        // Change the from date and focus the "to" input field
        this.setState({ from });
        this.props.setStartDate(from);
    };

    handleToChange = (to) => {
        this.setState({ to }, this.showFromMonth);
        this.props.setEndDate(to);
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        
        return (
            <div className="InputFromTo">
                <DayPickerInput
                value={from}
                placeholder="From"
                format="ll"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { after: to },
                    toMonth: to,
                    modifiers,
                    numberOfMonths: 2,
                    onDayClick: () => this.to.getInput().focus(),
                }}
                onDayChange={this.handleFromChange}
                />{' '}
                —{' '}
                <span className="InputFromTo-to">
                <DayPickerInput
                    ref={el => (this.to = el)}
                    value={to}
                    placeholder="To"
                    format="ll"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                    selectedDays: [from, { from, to }],
                    disabledDays: { before: from },
                    modifiers,
                    month: from,
                    fromMonth: from,
                    numberOfMonths: 2,
                    }}
                    onDayChange={this.handleToChange}
                />
                </span>
                <Helmet>
                    <style>{`
                    .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                        background-color: #f0f8ff !important;
                        color: #4a90e2;
                    }
                    .InputFromTo .DayPicker-Day {
                        border-radius: 0 !important;
                    }
                    .InputFromTo .DayPicker-Day--start {
                        border-top-left-radius: 50% !important;
                        border-bottom-left-radius: 50% !important;
                    }
                    .InputFromTo .DayPicker-Day--end {
                        border-top-right-radius: 50% !important;
                        border-bottom-right-radius: 50% !important;
                    }
                    `}</style>
                </Helmet>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        filters: state.filters
    };
}

const mapDispatchToProps = dispatch => ({
    setStartDate: (from) => dispatch(setStartDate(from)),
    setEndDate: (to) => dispatch(setEndDate(to))
})

export default connect(mapStateToProps, mapDispatchToProps)(RangePicker);