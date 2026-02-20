import { MainTitle } from "../components/MainTitle";
import { BigText } from "../components/BigText";
import { SectionItem } from "../components/SectionItem";
import { SearchBarButton } from "../components/SearchBarButton";
import { ButtonArrow } from "../components/ButtonArrow";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";


export function HomePage() {
    return <main>
        <MainTitle />
        <SearchBarButton />
        <BigText />
        <SectionItem
        TopStyle="text-4xl text-gray-950 tracking-tighter text-balance"
        Title="Supported by the best."
        BottomStyle="text-base text-gray-950"
       SubText={
            <>
          Tailwind is supported by incredible partners and sponsors who make it possible <br></br>
          for a team of talented designers and engineers to maintain the frameworkfull-time</>}/>
        <ButtonArrow />
        <SectionItem
         TopStyle="text-4xl text-gray-950 tracking-tighter text-balance"
          Title="Built for the modern web."
         BottomStyle="text-base text-gray-950"
           SubText={
           <>
          Tailwind is unapologetically modern, and takes advantage of all the latest and greatest CSS<br></br>
          features to make the developer experience as enjoyable as possible.</>} 
          SubTitle="Responsive Design"/>
        <SectionItem
        TopStyle="text-4xl text-gray-950 tracking=tighter text-balance"
        Title="Ship faster and smaller."    
        BottomStyle="text-base text-gray-950"
        SubText={
        <>
       Tailwind automatically removes all unused CSS when building for production, which means your<br></br>
         final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than<br></br>
        10kB of CSS to the client.</>}
        />
        <SectionItem
        TopStyle="text-4xl text-gray-950 tracking-tighter text-balance"
        Title={
         <>
        Build whatever you want,<br></br>
         without touching your CSS file.</>
        }
        BottomStyle="text-base text-gray-950"
        SubText={                
        <>
       Because Tailwind is so low-level, it never encourages you to design the same site twice. Some of your <br></br>                    favorite sites are built with Tailwind, and you probably had no idea.</>
        }
    />
    <SectionItem 
    TopStyle="text-4xl text-gray-950 tracking-tighter text-balance"
    Title = "Move even faster with Tailwind Plus."
    BottomStyle="text-base text-gray-950"
    SubText={
        <>
        Tailwind Plus is a collection of beautiful, fully responsive UI components, designed and developed<br></br>
         by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from,<br></br>
          and is guaranteed to help you find the perfect starting point for what you want to build.</>
    }
  />
  <Button Text="Explore Tailwind Plus"/>
  <Footer />









    </main>
}