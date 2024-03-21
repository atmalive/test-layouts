

export const SearchBar = () => {

    return (
        <div className='flex flex-col gap-3'>
            <h1 className="text-6xl font-medium  font-inter text-custom leading-[80.6px] text-left text-[rgb(54,70,112)] mb-2">Биржа вакансий и резюме</h1>

            <div className='flex gap-4'>
                <button
                    className="font-inter flex items-center justify-center gap-4 bg-[#911016] p-2 shadow-sm text-md rounded-2xl text-white font-medium text-md leading-[19.36px]">
                    Вакансии
                </button>

                <button
                    className="font-inter flex items-center justify-center gap-4 text-[#911016] p-2 rounded-2xl font-bold leading-[19.36px] tracking-wide text-md ">
                    Резюме
                </button>
            </div>

            <div className="flex justify-between items-center gap-5">
                <input
                    className="p-5 w-full h-[70px] border-[2px] border-[rgb(196,140,68)] rounded-xl"
                    type="text"
                    placeholder="Поиск..."
                />
                <button
                    className="font-inter flex items-center justify-center gap-4 bg-[#911016] h-15 min-w-32 pt-3 pb-3 pl-4 pr-5 shadow-sm w-[180px] h-[70px] text-md rounded-2xl text-white  text-lg font-medium leading-6 text-left">
                    Найти
                </button>
            </div>

            <div className='flex gap-4'>
                <button
                    className="font-inter flex items-center justify-center gap-4 p-2 shadow-sm text-md font-medium text-md py-1 px-3  rounded-full bg-[#FAF8F6] text-[#364670]  text-lg  leading-7 tracking-normal">
                    Копирайтер
                </button>
                <button
                    className="font-inter flex items-center justify-center gap-4 p-2 shadow-sm text-md font-medium text-md py-1 px-3  rounded-full bg-[#FAF8F6] text-[#364670]  text-lg  leading-7 tracking-normal">
                    Создание слайдов
                </button>
                <button
                    className="font-inter flex items-center justify-center gap-4 p-2 shadow-sm text-md font-medium text-md py-1 px-3  rounded-full bg-[#FAF8F6] text-[#364670]  text-lg  leading-7 tracking-normal">
                    Курьер
                </button>
            </div>
        </div>

    )
}