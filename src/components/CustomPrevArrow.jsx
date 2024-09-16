
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "", width: '35%', textAlign: 'right',  zIndex: 1000, color: 'black' }}
        onClick={onClick}
      >
      </div>
    )
  }
  
  export default CustomPrevArrow;
  