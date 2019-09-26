import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = !startDate || moment(expense.createdAt).isSameOrAfter(startDate);
        const endDateMatch = !endDate || moment(expense.createdAt).isSameOrBefore(endDate);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

export default getVisibleExpenses;