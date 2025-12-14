import { on } from "events";
import Image from "next/image";

type ClickerProps = {
    onClick: () => void;
}

export default function Clicker({ onClick }: ClickerProps) {
    return (
        <button 
            className="active:scale-110 transition-transform duration-75 ease-out select-none self-center" onClick={onClick}>
            <Image src="/present.png" alt="Present" width={325} height={325} />
        </button>
    )
}