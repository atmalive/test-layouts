
export const CardList = ({isVacancy = true}) => {

    if (isVacancy) {
        return (
            <div className="flex justify-center w-full md:justify-start items-center flex-wrap gap-5">
                <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover rounded"
                         src="/1.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Копирайтер
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover  rounded"
                         src="/2.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Механик
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover rounded"
                         src="/3.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Шеф-повар
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                    <img className="w-full max-h-36 object-cover rounded"
                         src="/4.png" alt="Копирайтер"/>
                    <div
                        className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Адвокат
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="flex justify-center w-full md:justify-start items-center flex-wrap gap-5">
            <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover rounded"
                     src="/4.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Копирайтер резюме
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover  rounded"
                     src="/1.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Механик резюме
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover rounded"
                     src="/3.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Шеф-повар резюме
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-6 max-w-[300px] min-w-72 w-full hover:opacity-90 cursor-pointer">
                <img className="w-full max-h-36 object-cover rounded"
                     src="/2.png" alt="Копирайтер"/>
                <div
                    className="text-center font-inter text-[23px] font-medium tracking-normal text-[#364670]">Адвокат резюме
                </div>
            </div>
        </div>
    )

}