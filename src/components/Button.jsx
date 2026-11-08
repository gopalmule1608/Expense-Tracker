

const Button = ({ text, type }) => {
    return (
        <div>
            <button type={type} className="bg-green-600 text-white w-full py-1 font-bold text-md rounded cursor-pointer">{text}</button>
        </div>
    )
}

export default Button