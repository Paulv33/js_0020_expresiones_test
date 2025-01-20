function getCurrentDate() {
    return new Date();
}

function getYear(date) {
    return date.getFullYear();
}

function getMonth(date) {
    return date.getMonth() + 1;
}

function getDayOfMonth(date) {
    return date.getDate();
}

function changeYear(date, year) {
    const newDate = new Date(date);
    newDate.setFullYear(year);
    return newDate;
}

function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
   
}

function getDayOfWeek(date) {
    return date.getDay();
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function isBefore(date1, date2) {
    return date1 < date2;
}

function isAfter(date1, date2) {
    return date1 > date2;
}

module.exports = {
    getCurrentDate,
    getYear,
    getMonth,
    getDayOfMonth,
    changeYear,
    addDays,
    getDayOfWeek,
    formatDate,
    isBefore,
    isAfter
};
