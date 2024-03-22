import {Search} from "@/components/Search/Search";


export const SearchBar = ({isVacancy, setIsVacancy}) => {

    const handleClick = () => {
        setIsVacancy(!isVacancy)
    }

    return (
        <div className='flex flex-col gap-3'>
            <h1 className="text-6xl font-medium  font-inter text-custom leading-[80.6px] text-left text-[rgb(54,70,112)] mb-2">Биржа вакансий и резюме</h1>

            <div className='flex gap-4'>
                <button
                    disabled={isVacancy} // Кнопка становится неактивной, если isVacancy === true
                    onClick={handleClick}
                    className={`font-inter flex items-center justify-center gap-4 ${isVacancy ? 'bg-[#911016] text-white font-medium' : 'text-[#911016] font-bold'} p-2 shadow-sm text-md rounded-2xl  leading-[19.36px]`}
                >
                    Вакансии
                </button>

                <button
                    disabled={!isVacancy} // Кнопка становится неактивной, если isVacancy === false
                    onClick={handleClick}
                    className={`font-inter flex items-center justify-center gap-4 ${!isVacancy ? 'bg-[#911016] text-white font-medium' : 'text-[#911016] font-bold'} p-2 rounded-2xl leading-[19.36px] tracking-wide text-md`}
                >
                    Резюме
                </button>
            </div>

            <Search/>

            <div className='flex gap-4'>
                <button
                    className="font-inter flex items-center justify-center gap-4 shadow-sm text-md font-medium text-md py-1 px-2 rounded-full bg-[#FAF8F6] text-[#364670]  text-lg  leading-7 tracking-normal">
                    Копирайтер
                </button>
                <button
                    className="font-inter flex items-center justify-center gap-4  shadow-sm text-md font-medium text-md py-1 px-2  rounded-full bg-[#FAF8F6] text-[#364670]  text-lg  leading-7 tracking-normal">
                    Создание слайдов
                </button>
                <button
                    className="font-inter flex items-center justify-center gap-4 shadow-sm text-md font-medium text-md py-1 px-2  rounded-full bg-[#FAF8F6] text-[#364670]  text-lg  leading-7 tracking-normal">
                    Курьер
                </button>
            </div>
        </div>

    )
}