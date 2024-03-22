
export const CardList = ({isVacancy = true}) => {

    if (isVacancy) {
        return (
            <div className="flex justify-center w-full md:justify-start items-center flex-wrap gap-5">
                <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover rounded"
                         src="/1.webp" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Копирайтер
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover  rounded"
                         src="/2.webp" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Механик
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover rounded"
                         src="/3.webp" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Шеф-повар
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover rounded"
                         src="/4.webp" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Адвокат
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center w-full md:justify-start items-center flex-wrap gap-5">
            <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover rounded"
                     src="/4.webp" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Копирайтер Вакансия
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover  rounded"
                     src="/3.webp" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Механик Вакансия
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover rounded"
                     src="/2.webp" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Шеф-повар Вакансия
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-1 sm:gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover rounded"
                     src="/1.webp" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Адвокат Вакансия
                </div>
            </div>
        </div>
    )
}