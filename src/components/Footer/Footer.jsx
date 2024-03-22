
export const Footer = () => {

    return (
        <div className="flex justify-between text-gray-600 text-sm border-t pt-5 mt-auto h-16 border-2">
            <div className='text-[#948171] font-inter text-sm font-normal leading-[18.2px]'>© 2023 Институт запусков</div>
            <div>
                <a href="#" className="hover:text-gray-800 text-[#911016] font-inter text-sm font-normal leading-[18.2px]">Политика конфиденциальности</a> |
                <a href="#" className="hover:text-gray-800 text-[#911016] font-inter text-sm font-normal leading-[18.2px]" > Правовая информация</a>
            </div>
        </div>
    )
}