
function Button(props) {
  return (
    <button onClick={props.onClick} className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-md w-full">
      {props.text}
    </button>
  )
}

export default Button