import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer p-6 md:p-10 mb-4 bg-blueColor rounded-lg gap-8 grid grid-cols-1 md:grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv text-center md:text-left">
          <h1 className="logo text-2xl md:text-3xl text-blueColor text-white pb-2 md:pb-6">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-6 opacity-70 leading-7 text-center md:text-left">
          We always make our job seekers find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className="grid text-center md:text-left">
        <span className="divTitle text-lg font-semibold pb-6 text-white">
          Company
        </span>
        <div className="grid gap-2 md:gap-3">
          <li className="text-white opacity-70 hover:opacity-100">About Us</li>
          <li className="text-white opacity-70 hover:opacity-100">Features</li>
          <li className="text-white opacity-70 hover:opacity-100">News</li>
          <li className="text-white opacity-70 hover:opacity-100">FAQ</li>
        </div>
      </div>

      <div className="grid text-center md:text-left">
        <span className="divTitle text-lg font-semibold pb-6 text-white">
          Resources
        </span>
        <div className="grid gap-2 md:gap-3">
          <li className="text-white opacity-70 hover:opacity-100">Account</li>
          <li className="text-white opacity-70 hover:opacity-100">Support</li>
          <li className="text-white opacity-70 hover:opacity-100">Feedback</li>
          <li className="text-white opacity-70 hover:opacity-100">Contact Us</li>
        </div>
      </div>

      <div className="grid text-center md:text-left">
        <span className="divTitle text-lg font-semibold pb-6 text-white">
          Support
        </span>
        <div className="grid gap-2 md:gap-3">
          <li className="text-white opacity-70 hover:opacity-100">Events</li>
          <li className="text-white opacity-70 hover:opacity-100">Promo</li>
          <li className="text-white opacity-70 hover:opacity-100">Req Demo</li>
          <li className="text-white opacity-70 hover:opacity-100">Careers</li>
        </div>
      </div>

      <div className="grid text-center md:text-left">
        <span className="divTitle text-lg font-semibold pb-6 text-white">
          Contact Info
        </span>
        <div>
          <small className="text-sm text-white">blogginghindi@gmail.com</small>
          <div className="icons flex gap-4 pt-4">
            <AiFillInstagram className='bg-white p-2 md:p-4 h-8 md:h-14 rounded-full icon text-blueColor' />
            <AiFillFacebook className='bg-white p-2 md:p-4 h-8 md:h-14 rounded-full icon text-blueColor' />
            <AiFillLinkedin className='bg-white p-2 md:p-4 h-8 md:h-14 rounded-full icon text-blueColor' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
