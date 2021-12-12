const Button = ({ text = 'Button', color = 'bg-blue-500', hoverColor = 'bg-blue-700', textColor = 'text-white' }) => {
  const classes = `py-2 px-4 ${color} hover:${hoverColor} ${textColor} transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg`
  return (
    <button type="button" className={classes}>
        { text }
    </button>
  );
}

export default Button;