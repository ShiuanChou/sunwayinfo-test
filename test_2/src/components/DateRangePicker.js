import React, { useState } from "react";
import "../styles/DateRangePicker.css";

const DateRangePicker = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

	const firstDayOffset = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

	const handleDateClick = (date) => {
		if (!startDate || (startDate && endDate)) {
			setStartDate(date);
			setEndDate(null);
		} else if (startDate && date >= startDate) {
			setEndDate(date);
		} else {
			setStartDate(date);
		}
	};

	const isToday = (date) => date.toDateString() === new Date().toDateString();

	return (
		<div className="date-range-picker">
			<div className="header">
				<button className="month-select" disabled>
					&lt;
				</button>
				<span>
					{currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
				</span>
				<button className="month-select" disabled>
					&gt;
				</button>
			</div>

			<div className="days-grid">
				{Array.from({ length: firstDayOffset }).map((_, i) => (
					<div key={`empty-${i}`} className="empty-day" />
				))}
				{Array.from({ length: daysInMonth }, (_, i) => {
					const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
					const inRange = startDate && endDate && date >= startDate && date <= endDate;
					const selectedStart = startDate && date.toDateString() === startDate.toDateString();
					const selectedEnd = endDate && date.toDateString() === endDate.toDateString();

					return (
						<button
							key={i}
							className={`day-button ${isToday(date) ? "today" : ""} ${inRange ? "in-range" : selectedStart ? "start-date" : selectedEnd ? "end-date" : ""
								}`}
							onClick={() => handleDateClick(date)}
						>
							{i + 1}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default DateRangePicker;
