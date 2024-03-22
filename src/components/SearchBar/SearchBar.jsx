import {Search} from "@/components/Search/Search";


export const SearchBar = ({isVacancy, setIsVacancy}) => {

    const handleClick = () => {
        setIsVacancy(!isVacancy)
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-4xl md:text-6xl font-medium font-inter md:leading-[80.6px] text-left text-[rgb(54,70,112)] mb-3">Биржа вакансий и резюме</h1>

            <div className='flex gap-4'>
                <button
                    disabled={isVacancy} // Кнопка становится неактивной, если isVacancy === true
                    onClick={handleClick}
                    className={`font-inter flex items-center justify-center gap-4 ${isVacancy ? 'bg-[#911016] text-white font-medium' : 'text-[#911016] font-bold'} p-3 shadow-sm text-md rounded-2xl  leading-[19.36px] hover:opacity-90`}
                >
                    Вакансии
                </button>

                <button
                    disabled={!isVacancy} // Кнопка становится неактивной, если isVacancy === false
                    onClick={handleClick}
                    className={`font-inter flex items-center justify-center gap-4 ${!isVacancy ? 'bg-[#911016] text-white font-medium' : 'text-[#911016] font-bold'} p-2 rounded-2xl leading-[19.36px] tracking-wide text-md hover:opacity-90`}
                >
                    Резюме
                </button>
            </div>

            <Search/>

            <div className='flex gap-7 justify-center md:justify-start'>
                <button
                    className=" hover:opacity-90 font-inter flex items-center justify-center shadow-sm text-md font-medium py-1 px-3 rounded-full bg-[#FAF8F6] text-[#364670] text-sm  md:text-lg   tracking-normal">
                    Копирайтер
                </button>
                <button
                    className=" hover:opacity-90 font-inter flex items-center justify-center shadow-sm text-md font-medium py-1 px-3  rounded-full bg-[#FAF8F6] text-[#364670] text-sm  md:text-lg   tracking-normal">
                    Создание слайдов
                </button>
                <button
                    className="hover:opacity-90 font-inter flex items-center justify-center shadow-sm text-md font-medium py-1 px-3  rounded-full bg-[#FAF8F6] text-[#364670] text-sm  md:text-lg  tracking-normal">
                    Курьер
                </button>
            </div>
        </div>

    )
}