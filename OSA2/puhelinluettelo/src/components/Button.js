const Button = ({ handleClick, text,id }) => (
    <button onClick={()=>handleClick(id)}>
      {text}
    </button>
  )
  export default Button