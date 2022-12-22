import React from 'react';

export default function Calendar() {
    const [displayedDate, setDisplayedDate] = React.useState(new Date());

    const days = [];
    const displayedDateCopy = new Date(displayedDate);
    
    for (let i = 1; i <= new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1, 0).getDate(); i++) {
        displayedDateCopy.setDate(i);
        days.push(displayedDateCopy.getDate());
    }

    function handlePrevMonthClick() {
        setDisplayedDate(prevDisplayedDate => {
            const newDisplayedDate = new Date(prevDisplayedDate);
            newDisplayedDate.setMonth(newDisplayedDate.getMonth() - 1);
            return newDisplayedDate;
        });
    }

    function handleNextMonthClick() {
        setDisplayedDate(prevDisplayedDate => {
            const newDisplayedDate = new Date(prevDisplayedDate);
            newDisplayedDate.setMonth(newDisplayedDate.getMonth() + 1);
            return newDisplayedDate;
        });
    }

    function handleDayClick(day, currDate, vdl) {
        console.log(`Day ${day} ${currDate} ${vdl}`);
    }    

    var options = { month: 'long', year: 'numeric'};
    var currDate = new Intl.DateTimeFormat('fr-FR', options).format(displayedDate);

    return (
        <div className='flex flex-wrap px-8 pt-8'>
            <div className="w-full">
                <button onClick={handlePrevMonthClick} className={"rounded-xl bg-gray-200 p-2 px-4"}>
                    {"<"}
                </button>
                <button onClick={handleNextMonthClick} className={"rounded-xl bg-gray-200 p-2 px-4"}>
                    {">"}
                </button>
                {currDate}
            </div>
            <div className='w-full pt-8'>
                <table className='w-full border-collapse border border-slate-400'>
                    <thead className=''>
                        <tr>
                            <th className='border border-slate-300 bg-gray-200'>VDL</th>
                            {days.map(day => (
                                <th className='border border-slate-300 bg-gray-200' key={day}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-slate-300 bg-gray-100'>Vehicule 1</td>
                            {days.map(day => (
                                <td className='border border-slate-300 bg-gray-50 hover:bg-gray-100' onClick={() => handleDayClick(day, currDate, "vdl1")} key={day}></td>
                            ))}
                        </tr>
                        <tr>
                            <td className='border border-slate-300 bg-gray-100'>Vehicule 2</td>
                            {days.map(day => (
                                <td className='border border-slate-300 bg-gray-50 hover:bg-gray-100' onClick={() => handleDayClick(day, currDate, "vdl2")} key={day}></td>
                            ))}
                        </tr>
                        <tr>
                            <td className='border border-slate-300 bg-gray-100'>Vehicule 3</td>
                            {days.map(day => (
                                <td className='border border-slate-300 bg-gray-50 hover:bg-gray-100' onClick={() => handleDayClick(day, currDate, "vdl3")} key={day}></td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}