
export const CardList = () => {

    return (
        <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex flex-col items-center">
                <img className="w-full h-32 object-cover mb-2 rounded" src="/images/copywriter.jpg" alt="Копирайтер"/>
                <div className="text-center font-medium">Копирайтер</div>
            </div>
            <div className="flex flex-col items-center">
                <img className="w-full h-32 object-cover mb-2 rounded" src="/images/mechanic.jpg" alt="Механик"/>
                <div className="text-center font-medium">Механик</div>
            </div>
            <div className="flex flex-col items-center">
                <img className="w-full h-32 object-cover mb-2 rounded" src="/images/chef.jpg" alt="Шеф-повар"/>
                <div className="text-center font-medium">Шеф-повар</div>
            </div>
            <div className="flex flex-col items-center">
                <img className="w-full h-32 object-cover mb-2 rounded" src="/images/lawyer.jpg" alt="Адвокат"/>
                <div className="text-center font-medium">Адвокат</div>
            </div>
        </div>
    )
}