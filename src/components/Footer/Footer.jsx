
export const Footer = () => {

    return (
        <div className="flex flex-col-reverse md:flex-row justify-between text-gray-600 text-sm border-t md:py-5 md:px-10 mt-auto md:h-16">
            <div className='text-[#948171] font-inter text-sm font-normal leading-[18.2px]'>© 2023 Институт запусков</div>
            <div>
                <a href="#" className="hover:text-gray-800 text-[#911016] font-inter text-xs md:text-sm font-normal leading-[18.2px]">Политика конфиденциальности</a> |
                <a href="#" className="hover:text-gray-800 text-[#911016] font-inter text-xs md:text-sm font-normal leading-[18.2px]" > Правовая информация</a>
            </div>
        </div>
    )
}