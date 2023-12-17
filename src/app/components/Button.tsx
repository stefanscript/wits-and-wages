import Link from "next/link";

interface Props {
    onClick: () => void;
    title: string;
    subtitle?: string;
}

export default function Button({onClick, title, subtitle}: Props) {
    return (
        <button
            onClick={onClick}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <span className={`mb-3 text-2xl font-semibold`}>
                {title}{' '}
            </span>
            <span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {subtitle}
            </span>
        </button>
    )
}