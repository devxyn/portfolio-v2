interface ButtonProps {
  className: string;
  text: string;
  id?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({ className, text, id }: ButtonProps) => {
  return (
    <a href='' className={`${className ?? ''}`}>
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
