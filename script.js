document.addEventListener('DOMContentLoaded', function() {
    const monthYearElem = document.getElementById('monthYear');
    const datesElem = document.getElementById('dates');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        monthYearElem.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
        
        datesElem.innerHTML = '';

        // Fill in days from previous month
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        const prevMonthStartDay = new Date(year, month, 1).getDay();
        for (let i = prevMonthLastDay - prevMonthStartDay + 1; i <= prevMonthLastDay; i++) {
            datesElem.innerHTML += `<div class="date inactive">${i}</div>`;
        }

        // Fill in days of the current month
        for (let i = 1; i <= lastDay.getDate(); i++) {
            datesElem.innerHTML += `<div class="date">${i}</div>`;
        }

        // Fill in days from next month
        const nextMonthDays = 42 - (prevMonthStartDay + lastDay.getDate());
        for (let i = 1; i <= nextMonthDays; i++) {
            datesElem.innerHTML += `<div class="date inactive">${i}</div>`;
        }
    }

    prevBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
