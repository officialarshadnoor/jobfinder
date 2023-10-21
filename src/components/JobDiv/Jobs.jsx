import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';
import logo9 from '../../assets/logo9.png';
import logo10 from '../../assets/logo10.png';

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis, rerum modi expedita iusto reiciendis molestias inventore omnis hic et eius, assumenda placeat. Perspiciatis, temporibus.',
    company: 'Novac Linus Co.',
  },
  {
    id: 2,
    image: logo2,
    title: 'Frontend Developer',
    time: '2 h',
    location: 'USA',
    desc: 'A Frontend Developer role with experience in React, JavaScript, and CSS. Join our dynamic team and work on cutting-edge projects.',
    company: 'Tech Solutions Inc.',
  },
  {
    id: 3,
    image: logo3,
    title: 'Software Engineer',
    time: 'Now',
    location: 'UK',
    desc: 'We are looking for a talented Software Engineer to join our development team. If you have a passion for coding, apply now!',
    company: 'CodeCrafters Ltd.',
  },
  {
    id: 4,
    image: logo4,
    title: 'Data Analyst',
    time: '19Hrs',
    location: 'Germany',
    desc: 'Data Analyst position with a focus on data visualization and data-driven decision-making. Exciting opportunities await you!',
    company: 'DataMinds Analytics',
  },
  {
    id: 5,
    image: logo5,
    title: 'UX Designer',
    time: 'Now',
    location: 'Canada',
    desc: 'Join our creative team as a UX Designer and create amazing user experiences for our clients.',
    company: 'DesignHub Creative',
  },
  {
    id: 6,
    image: logo6,
    title: 'Backend Developer',
    time: '10Hrs',
    location: 'Australia',
    desc: 'Backend Developer needed to work on server-side logic and maintain databases. If you love coding, this is for you!',
    company: 'ByteCrafters Pty. Ltd.',
  },
  {
    id: 7,
    image: logo7,
    title: 'Marketing Manager',
    time: 'Now',
    location: 'USA',
    desc: 'Marketing Manager role to drive marketing strategies and campaigns. Join our fast-paced marketing team.',
    company: 'MarketingPros Inc.',
  },
  {
    id: 8,
    image: logo8,
    title: 'Graphic Designer',
    time: '10Hrs',
    location: 'UK',
    desc: 'Seeking a creative Graphic Designer to work on visual content and branding. Join our design studio now!',
    company: 'CreativeVisions Studio',
  },
  {
    id: 9,
    image: logo9,
    title: 'Product Manager',
    time: 'Now',
    location: 'Canada',
    desc: 'Product Manager position for those who love managing products and driving innovation in the industry.',
    company: 'ProductPro Innovations',
  },
  {
    id: 10,
    image: logo10,
    title: 'QA Tester',
    time: '10Hrs',
    location: 'Germany',
    desc: 'Quality Assurance Tester role to ensure the quality of our software. Join our QA team and make a difference!',
    company: 'QualityCheck Software',
  },
  // Add more entries here...
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Data.map((job) => (
          <div key={job.id} className="group singleJob bg-white rounded-lg hover:bg-blueColor shadow-lg hover:shadow-lg transition duration-300">
            <img src={job.image} alt="Company Logo" className="w-1/5 mx-auto pt-6" />
            <h1 className="text-lg font-semibold text-textColor group-hover:text-white text-center pt-4">{job.title}</h1>
            <span className="flex justify-center items-center text-[#ccc] mt-2">
              <BiTimeFive /> {job.time}
            </span>
            <h6 className="text-[#ccc] text-center mt-2">{job.location}</h6>
            <p className="text-sm text-[#95959] px-4 py-2 border-t-2 group-hover:text-white">{job.desc}</p>
            <div className="company flex items-center justify-center gap-2 mt-2">
              <span className="text-md font-semibold group-hover:text-white">{job.company}</span>
            </div>
            <button className="border-2 rounded-lg p-2 text-md font-semibold text-textColor hover:bg-white block w-4/5 mx-auto mt-4 group-hover:bg-textColor group-hover:text-white">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
