"use client"
import {useEffect, useState} from "react";
import {services} from "@/utils/services";


export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);


    const filteredServices = services.filter(service =>
        service.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 4); // Отрезать до 4 элементов

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setSelectedIndex(-1); // Сбросить выбранный элемент при изменении поиска
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowDown') {
                setSelectedIndex(prevIndex => (prevIndex < filteredServices.length - 1 ? prevIndex + 1 : prevIndex));
            } else if (event.key === 'ArrowUp') {
                setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [filteredServices.length]);


    return (
        <div className="w-full mx-auto">
            <form className="relative flex flex-col-reverse md:flex-row w-full gap-3" onSubmit={e => e.preventDefault()}>
                <label className="w-full relative">
                    <input
                        className="p-5 w-full h-12 md:h-[70px] border-[2px] border-[rgb(196,140,68)] rounded-xl placeholder-gray-400 font-inter text-lg font-medium tracking-tight"
                        type="text"
                        placeholder="Услуга или специалист"
                        onChange={handleInputChange}
                        value={searchTerm}
                    />
                    {searchTerm && (
                        <div className="py-2 bg-white border-[1px] border-[#EAEAEA] rounded-xl w-full max-h-48 absolute" style={{zIndex: 10}}>
                            <ul className='flex flex-col'>
                                {filteredServices.length > 0 ? (
                                    filteredServices.map((service, index) => (
                                        <li key={index} className={`px-5 py-2 font-inter md:text-lg font-medium text=[#364670] ${index === selectedIndex ? 'bg-gray-200' : ''}`} onClick={() => setSearchTerm(service)}>
                                            {service}
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-5 py-2 md:text-lg font-inter text-lg font-medium text=[#364670]">Ничего не найдено</li>
                                )}
                            </ul>
                        </div>
                    )}
                </label>
                <button
                    className="hover:opacity-90 font-inter flex items-center justify-center gap-4 bg-[#911016] p-2 md:min-w-32 md:pt-3 md:pb-3 md:pl-4 md:pr-5 shadow-sm md:w-[180px] text-md rounded-2xl text-white text-lg font-medium leading-6">
                    Найти
                </button>
            </form>
        </div>
    );
};