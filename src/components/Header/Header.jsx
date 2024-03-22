

export const Header = () => {


    return (
        <div className="md:py-5 md:px-10 flex justify-between items-center border-b">
            <div className='flex items-center justify-start gap-3'>
                <div className="logo">
                    ИЗ
                </div>
                <h1 className="hidden md:block text-2xl font-normal leading-normal text-left text-red-800">Институт запусков</h1>
            </div>

            <button
                className="font-inter flex items-center justify-start gap-4 bg-white h-15 min-w-32 pt-3 pb-3 pl-4 pr-5 shadow-sm w-[190px] h-[60px] text-md font-medium rounded-2xl text-[rgb(54,70,112)] hover:opacity-90">
                <div className='rounded-full px-3 py-2 bg-[#A68144]'>
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.998.953a5 5 0 1 0 0 10 5 5 0 0 0 0-10M4.467 12.266c-2.615.714-4.47 2.987-4.47 5.687v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.7-1.854-4.973-4.468-5.687a.95.95 0 0 0-.656.062 7 7 0 0 1-2.875.625c-.985 0-1.96-.212-2.875-.625a.95.95 0 0 0-.656-.062"
                            fill="#fff"/>
                    </svg>
                </div>
                Войти
                <svg className='ml-auto' width="14" height="8" viewBox="0 0 14 8" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.668 8a1.33 1.33 0 0 1-.946-.386l-5.33-5.33A1.338 1.338 0 1 1 2.284.392l4.384 4.41L11.065.565a1.333 1.333 0 1 1 1.838 1.919l-5.33 5.143A1.33 1.33 0 0 1 6.669 8"
                        fill="#364670"/>
                </svg>
            </button>

        </div>
    )
}