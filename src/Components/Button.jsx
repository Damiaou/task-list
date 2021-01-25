const Button = ({
  children,
  disabled,
  onClick,
  className,
  submit,
}) => {
  const classForButton =
    'shadow border-green-200 border-4 rounded outline-none hover:bg-green-200 hover:shadow-lg px-2';
  if (className) {
    className += ` ${classForButton}`;
  } else {
    className = classForButton;
  }
  const type = submit ? 'submit' : '';
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
