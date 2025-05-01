import { socialImgs } from '../constants/data';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url}>
              <img src={img.imgPath} alt='icon' />
            </a>
          ))}
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            © {new Date().getFullYear()} John Lawrence Hermo | Devxyn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
