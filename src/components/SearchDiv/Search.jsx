import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
  return (
    <div className='searchDiv grid gap-4 sm:gap-8 md:gap-10 bg-greyIsh rounded-[10px] p-6 md:p-8'>
      <form action=''>
        <div className='firstDiv grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {[
            { icon: AiOutlineSearch, placeholder: 'Search Job Here....' },
            { icon: BsHouseDoor, placeholder: 'Search by Company....' },
            { icon: CiLocationOn, placeholder: 'Search by location....' },
          ].map((item, index) => (
            <div key={index} className='flex gap-2 items-center rounded-[8px] bg-white p-3 shadow-lg shadow-greyIsh-700'>
              <item.icon className='text-2xl text-blueColor icon' />
              <input
                type='text'
                className='bg-transparent text-blue-500 focus:outline-none w-full'
                placeholder={item.placeholder}
              />
              <AiOutlineCloseCircle className='text-3xl text-[#a5a6a6] hover:text-textColor icon' />
            </div>
          ))}
        </div>
        <button className='bg-blueColor p-4 rounded-lg cursor-pointer hover:bg-blue-300 mt-4 sm:mt-0 w-full sm:w-auto'>
          Search
        </button>
      </form>

      <div className='secDiv flex flex-col sm:flex-row items-center gap-4 sm:gap-10 mt-4'>
        {[
          { label: 'Sort by:', id: 'relavance', options: ['Relevance', 'Inclusive', 'Start with', 'Contains'] },
          { label: 'Type:', id: 'type', options: ['Full-time', 'Remote', 'Contract', 'Part-time'] },
          { label: 'Level:', id: 'level', options: ['Senior', 'Beginner', 'Intermediate', 'Advocate'] },
        ].map((item, index) => (
          <div key={index} className='singleSearch flex flex-col sm:flex-row items-center gap-2'>
            <label htmlFor={item.id} className='text-[#808080] font-semibold'>
              {item.label}
            </label>
            <select name={item.id} id={item.id} className='bg-white rounded-[3px] px-4 py-1 w-full sm:w-auto'>
              {item.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <span className='text-[#a1a1a1] cursor-pointer mt-4 sm:mt-0 text-center sm:text-left'>
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Search;
