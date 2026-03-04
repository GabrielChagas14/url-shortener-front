

function Input(props) {

    return (
        <label className="block font-medium text-gray-700 mb-2 text-left font-bold text-lg">
            {props.label}
            <input type="text" value={props.value} onChange={props.onChange} className="border-solid border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Digite a URL" />
        </label>
    )
}

export default Input