

const Input = ({ type, label, placeholder, register, name }) => {



    return (
        <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">{label}</label>
            <input type={type} placeholder={placeholder} className="border px-2 py-1 rounded outline-none"
                {...register(name)}
            />
        </div>
    )
}

export default Input
