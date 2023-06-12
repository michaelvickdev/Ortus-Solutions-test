import React from 'react';

function NavBar() {
  const items = [
    { label: 'DESTINATIONS' },
    { label: 'ACTIVITIES' },
    { label: 'DATES' },
    { label: 'RESERVATIONS' },
    { label: 'RESOURCES' },
    { label: 'CONTACT' },
  ];

  return (
    <header>
      <div className='flex justify-between px-8 py-2 bg-green-700 text-white text-xs'>
        <div>Lorem Ipsum is simply dummy test</div>
        <div className='flex gap-2'>
          <div>Locations</div>
          <div>My Account</div>
        </div>
      </div>
      <div className='flex px-8 py-4 gap-16'>
        <div className='w-24 h-24 bg-black rounded-full'>

        </div>
        <div className='flex-1'>
          <div className='flex justify-between items-start'>
            <div className='border border-gray-200 px-2 py-1'>
              <input placeholder='Search' className='focus-visible:outline-none' />
            </div>
            <div className='text-green-700 text-end'>
              <p className='text-lg font-semibold'>1-800-555-555</p>
              <p className='text-xs'>CALL US ANY TIME</p>
            </div>
          </div>
          <div className='border-t border-gray-100 mt-4 flex px-3 pt-3 justify-between'>
            {
              items.map(item => (
                <a key={item.label} className='text-gray-400 cursor-pointer hover:text-green-700'>
                  {item.label}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;