const NavBar = () => {
  return (
    <div className='navBar flex flex-col md:flex-row justify-between items-center p-6 md:p-8'>
      <div className='logoDiv text-center md:text-left'>
        <h1 className='logo text-2xl md:text-3xl text-blueColor'>
          <strong>Job</strong>Search
        </h1>
      </div>

      <div className='menu flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0'>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          Jobs
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          Companies
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          About
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          Contact
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          Blog
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          Login
        </li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
          Register
        </li>
      </div>
    </div>
  );
};

export default NavBar;