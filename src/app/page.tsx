import Image from 'next/image'
import Link from "next/link";
import NumberOfQuestions from "@/app/components/NumberOfQuestions";
import LinkButton from "@/app/components/LinkButton";


export default function Home() {
  return (
    <>
      <div className="z-10 max-w-5xl w-full text-center mb-24">
        <NumberOfQuestions />
      </div>

      <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <LinkButton path={"/rules"} title={"Rules"} subtitle={"Learn the rules"} type={"outline"}/>
        <LinkButton path={"question/1"} title={"Start"} subtitle={"Start the game"} type={"primary"}/>
      </div>
    </>
  )
}
