import simple from '../../assets/simple.png';
import valentines from '../../assets/valentines.png';
import shield from '../../assets/shield.png';

const Value = () => {
  return (
    <div className='mb-8 md:mb-16 mt-8 md:mt-12'>
      <h1 className='text-textColor text-2xl md:text-3xl lg:text-4xl font-bold text-center py-4 md:py-6 pb-6 md:pb-8'>
        The values that hold us true and accountable
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {[
          {
            image: simple,
            title: 'Simplicity',
            description: 'Things being made beautifully simple are at the heart of everything we do.',
          },
          {
            image: valentines,
            title: 'Compassion',
            description: 'We believe in making things better for everyone, even if just by a little bit!',
          },
          {
            image: shield,
            title: 'Integrity',
            description: 'We work on the basis of creating trust, which can be nurtured through authenticity and transparency.',
          },
        ].map((item, index) => (
          <div key={index} className='singleGrid rounded-lg hover:bg-[#eeedf7] p-4 md:p-6'>
            <div className='flex items-center gap-4'>
              <div className='imgDiv p-8 rounded-[.8rem] bg-[#dedef8] h-16 w-16 flex items-center justify-center'>
                <img src={item.image} alt='' className='w-10' />
              </div>
              <span className='font-semibold text-textColor text-lg'>{item.title}</span>
            </div>
            <p className='text-sm text-textColor opacity-70 py-4 font-semibold'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
