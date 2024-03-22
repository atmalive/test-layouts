
export const CardList = ({isVacancy = true}) => {

    if (isVacancy) {
        return (
            <div className="flex justify-start items-center gap-3">
                <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                    <img className="w-full h-32 object-cover mb-3 rounded"
                         src="/1.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Копирайтер
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                    <img className="w-full h-32 object-cover mb-3 rounded"
                         src="/2.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Механик
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                    <img className="w-full h-32 object-cover mb-3 rounded"
                         src="/3.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Шеф-повар
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                    <img className="w-full h-32 object-cover mb-3 rounded"
                         src="/4.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Адвокат
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="flex justify-start items-center gap-3">
            <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                <img className="w-full h-32 object-cover mb-3 rounded"
                     src="/4.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Не Копирайтер
                </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                <img className="w-full h-32 object-cover mb-3 rounded"
                     src="/3.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Не Механик
                </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                <img className="w-full h-32 object-cover mb-3 rounded"
                     src="/2.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Не Шеф-повар
                </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[300px] w-full">
                <img className="w-full h-32 object-cover mb-3 rounded"
                     src="/1.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Не Адвокат
                </div>
            </div>
        </div>
    )
}