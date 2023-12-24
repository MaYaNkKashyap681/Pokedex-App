import React from 'react';

const StatsModel: React.FC<{
    pokemonImage?: string;
    stats: any;
}> = ({  stats }) => {

    return (
        <div className='p-8 w-[70%] flex flex-col gap-2'>
            {stats.map((item: any, index: number) => (
                <div key={index}>
                    <div className='flex items-center gap-4 justify-between'>
                    <h2 className='font-bold text-sm'>{item.stat.name.toUpperCase()}</h2>
                    <h3 className='font-bold text-md'>{item.base_stat}%</h3>
                    </div>
                    <div className='h-3 w-full rounded-2xl flex items-center  bg-gray-300'>
                        <div className='h-full rounded-xl transition-all duration-200'
                            style={{
                                backgroundColor: item.base_stat < 30 ? '#ff215b' : item.base_stat < 60 ? '#ffde00' : '#7bcf00',
                                width: item.base_stat + "%"
                            }}></div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default StatsModel;
