interface ButtonProps {
  className: string;
  text: string;
  id?: string;
}

const Button = ({ className, text, id }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.getElementById('counter');

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
  return (
    <a onClick={handleClick} href='' className={`${className ?? ''}`}>
      <div className='cta-button group'>
        <div className='bg-circle'></div>
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src='/images/arrow-down.svg' alt='arrow' />
        </div>
      </div>
    </a>
  );
};

export default Button;
