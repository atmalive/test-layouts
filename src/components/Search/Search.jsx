"use client"
import {useState} from "react";


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const services = [
        'Стрижка волос',
        'Стрижка волос2',
        'Стрижка волос3',
        'Стрижка волос4',
        'Стрижка волос4',
        'Стрижка волос4',
        'Стрижка волос4',
        'Стрижка волос4',
        'Стрижка волос4',
        'Маникюр',
        'Педикюр',
        'Массаж',
        'Уборка квартиры',
        'Ремонт техники',
        'Консультация психолога',
        'Репетитор по математике',
        'Уроки гитары',
        'Фитнес тренировки'
    ];

    const filteredServices = services.filter(service =>
        service.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="w-full mx-auto"> {/* Обертка для инпута и списка результатов */}
            <form className="relative flex w-full gap-3" onSubmit={e => e.preventDefault()}>
                <label className="w-full relative">
                    <input
                        className="p-5 w-full h-[70px] border-[2px] border-[rgb(196,140,68)] rounded-xl placeholder-gray-400 font-inter text-lg font-medium tracking-tight"
                        type="text"
                        placeholder="Услуга или специалист"
                        onChange={handleInputChange}
                        value={searchTerm}
                    />
                    {searchTerm && (
                        <div
                            className=" p-4 bg-white border-[1px] border-[#EAEAEA] rounded-xl w-full max-h-48 absolute" style={{zIndex: 10}}>
                            <ul className='flex flex-col'>
                                {filteredServices.length > 0 ? (
                                    filteredServices.map((service, index) => (
                                        <li key={index} className="p-2">
                                            {service}
                                        </li>
                                    ))
                                ) : (
                                    <li>Ничего не найдено</li>
                                )}
                            </ul>
                        </div>
                    )}
                </label>
                <button
                    className="font-inter flex items-center justify-center gap-4 bg-[#911016] h-15 min-w-32 pt-3 pb-3 pl-4 pr-5 shadow-sm w-[180px] h-[70px] text-md rounded-2xl text-white text-lg font-medium leading-6">
                    Найти
                </button>
            </form>
        </div>
    )
}