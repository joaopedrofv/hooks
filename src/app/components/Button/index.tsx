import { Props } from "./interfaces";


const Button = (props: Props) => {
    return <button className="px-4 py-2 bg-black text-white" onClick={props.onClick}>{props.text}</button>
}

export default Button;