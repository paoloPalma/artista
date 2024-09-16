

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", width: '35%', textAlign: 'left', color: 'black' }}
      onClick={onClick}
    >
    </div>
  )
}

export default CustomNextArrow