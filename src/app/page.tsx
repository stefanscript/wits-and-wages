import Image from 'next/image'
import Link from "next/link";
import NumberOfQuestions from "@/app/components/NumberOfQuestions";


export default function Home() {
  return (
    <>
      <div className="z-10 max-w-5xl w-full">
        <h1>Wits and Wages</h1>

        <NumberOfQuestions />
      </div>



      <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <Link
            href="/rules"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Rules{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn the rules
          </p>
        </Link>

        <Link
          href="/question"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Start{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Start the game
          </p>
        </Link>


      </div>
    </>
  )
}
