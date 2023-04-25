import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import RelatedProducts from "@/components/RelatedProducts";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const askQuestion = () =>{
     router.push("./AskQuestion/AskQuestion")
  }
  return (
    <main  className="bg-pink-200">
      <HeroBanner />
      <Wrapper className="wrapper-border bg-[#92FFFD] mt-3">
      {/* heading and paragaph start */}
      <div className="flex justify-between py-16 md:py-14 sm:py-9 mob-py items-center" >
          <div className="font-bold text-xl">Have A Question ?</div>
          <button onClick = {askQuestion} className="p-2 bg-cyan-500 text-white">Ask Question</button>
      </div>
      </Wrapper>
      <Wrapper>
      <RelatedProducts/>
      </Wrapper>
    </main>
  );
}
