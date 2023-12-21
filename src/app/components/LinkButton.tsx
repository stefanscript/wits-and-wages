import Link from "next/link";

interface Props {
    path: string;
    title: string;
    subtitle: string;
    type: "primary" | "outline"
}

export default function LinkButton({path, title, subtitle, type}: Props) {
    return (
        <Link
            href={`${path}`}
            className={`${type === "primary" ? "text-white bg-green-500 border-green-900" : "bg-white text-green-700 border-gray-500"} shadow-sm shadow-gray-950 rounded-lg border px-5 py-4 mx-2 transition-colors hover:drop-shadow-md`}
        >
            <span className={`mb-3 text-xl font-semibold`}>
                {title}
            </span>
            <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>
                {subtitle}
            </p>
        </Link>
    )
}