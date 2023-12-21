import Link from "next/link";

interface Props {
    onClick: () => void;
    title: string;
    subtitle?: string;
    type: "outline" | "primary";
}

export default function Button({onClick, title, subtitle, type}: Props) {
    return (
        <button
            onClick={onClick}
            className={`${type === "primary" ? "text-white bg-green-500 border-green-900" : "bg-white text-green-700 border-gray-500"} inline-block shadow-sm shadow-gray-950 rounded-lg border border-transparent px-5 py-4 mx-2 transition-colors`}
        >
            <span className={`mb-3 text-xl font-semibold`}>
                {title}{' '}
            </span>
            <span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {subtitle}
            </span>
        </button>
    )
}