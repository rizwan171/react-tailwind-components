const Card = ({ text = 'Hello World', color = 'bg-white', hoverColor = 'bg-gray-100', width = 'w-80', height = '' , minWidth = '', minHeight = 'mh-28', padding = 'p-4' }) => {
  const classes = `shadow border select-none cursor-pointer ${color} hover:${hoverColor} rounded-md ${width} ${height} ${minWidth} ${minHeight} ${padding}`;

  return (
    <div class={classes}>
      <div class="pl-1 pb-1">
        <div class="font-medium">
            { text }
        </div>
      </div>
    </div>
  );
}

export default Card;
