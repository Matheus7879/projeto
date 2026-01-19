import { BlogTitle } from "../components/BlogTitle"
import { Footer } from "../components/Footer"
import { SectionItemsBlog } from "../components/SectionItemsBlog"

export function BlogPage() {
    return <div>
        <BlogTitle Title="Latest Updates"
            Subtitle="All the latest Tailwind CSS news, straight from the team." />
        <SectionItemsBlog
        Date="Jul 25, 2025"
        SubTitle="Vanilla JavaScript support for Tailwind Plus"
        SubText={    <>
               There are a lot of UI blocks in Tailwind Plus that need JavaScript to really be useful, like dialogs,<br></br>
              dropdowns, command palettes, and more. And unless you're a React or Vue user, using those UI<br></br>
                blocks has always meant writing all of that tricky JavaScript yourself. Well today that finally changes...
                </>}Read/>
        <SectionItemsBlog
        Date="May 14, 2025"
        SubTitle="Compass: A starter kit for online courses"
        SubText={
            <>I've been itching to get back into screencasting and teaching lately, and the natural first step was to<br></br>
                build our own course platform. So we just released <span className="border-b border-sky-400 font-medium">Compass</span>, a Next.js starter kit for publishing your<br></br>
               own online course.
                </>}/>
        <SectionItemsBlog
        Date="Apr 03, 2025"
        SubTitle="Tailwind CSS v4.1: Text shadows, masks, and tons more"
        SubText={
            <>I wasn't sure it would ever happen but we did it — we released a version of Tailwind CSS that<br></br>
                includes text shadow utilities. Tailwind CSS v4.1 is here and it's packed with improvements that will<br></br>
                help you (or your LLM, you coward) build even better interactive experiences.
                </>}/>
        <SectionItemsBlog
        Date="Mar 04, 2025"
        SubTitle="Tailwind UI is now Tailwind Plus"
        SubText={
            <>We just shipped a huge rebrand project, turning what was previously known as Tailwind UI into<br></br>
                Tailwind Plus. Tailwind Plus is the all same high-quality resources you know from Tailwind UI, but<br></br>
                 with all-new possibilities and potential.
                </>}/>
        <SectionItemsBlog
        Date="Jan 22, 2025"
        SubTitle="Tailwind CSS v4.0"
        SubText={
            <>We just released Tailwind CSS v4.0 — an all-new version of the framework optimized for<br></br>
             performance and flexibility, with a reimagined configuration and customization experience, and<br></br>
              taking full advantage of the latest advancements the web platform has to offer.
            </>
        } 
        />
        <SectionItemsBlog 
        Date="Nov 21, 2024"
        SubTitle="Tailwind CSS v4.0 Beta 1"
        SubText={
            <>About eight months ago we <span className="border-b border-sky-400 font-medium">open-sourced our progress</span> on Tailwind CSS v4.0. Hundreds of hours of<br></br>
             fixing bugs, soul-crushing backward compatibility work, and troubleshooting Windows CI failure<br></br>
              later, I'm excited to finally tag the first public beta release.
            </>
        }
        />
        <SectionItemsBlog 
        Date="Sep 12, 2024"
        SubTitle="Radiant: A beautiful new marketing site template"
        SubText={
            <>Over the past couple of months we’ve been working away at a new SaaS marketing site template for<br></br>
             Tailwind UI. It's called <span className="border-b border-sky-400 font-medium">Radiant</span>, and you can start using it today.
            </>
        }
        />
        <SectionItemsBlog
        Date="Jun 21, 2024"
        SubTitle="Headless UI v2.1: Simplified transition API and improved multi-dialog support"
        SubText={
            <>We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and<br></br>
             adds support for rendering multiple dialogs as siblings.
            </>
        }
        />
        <SectionItemsBlog 
        Date="May 31, 2024"
        SubTitle="Automatically clean up whitespace and duplicate class names"
        SubText={
            <>We just released a new version of `prettier-plugin-tailwindcss` which adds support for removing<br></br>
             unnecessary whitespace and duplicate classes when sorting.
            </>
        }
        />
        <SectionItemsBlog
        Date="May 24, 2024"
        SubTitle="Catalyst: Application layouts, navigation menus, description lists, and more"
        SubText={
            <>We just published the first major update to Catalyst since realising the developer preview, with<br></br>
            two new application layouts, navbar and sidebar components, description lists, and more.</>
        }/>
        <SectionItemsBlog
        Date="May 7, 2024"
        SubTitle="Headless UI v2.0 for React"
        SubText={
            <>Nothing beats actually building something real with your own tools when it comes to finding ways to <br></br>
            make things better. As we've been working on <span className="border-b border-blue-300 font-medium">Catalyst</span> these last several months, we've been<br></br>
            making dozens of improvement to Headless UI that let you write even less code, and make the...
            </>}
        />
        <SectionItemsBlog
        Date="Mar 19, 2024"
        SubTitle="We're hiring a Design Engineer + Staff Engineer"
        SubText={
            <>We're hiring a Desing Engineer and a Staff Engineer to work on some ambitious new projects<br></br>
            with us. Both roles are fully remote, with a salary of $275,000 USD.
            </>
        }/>
        <SectionItemsBlog
        Date="Mar 6, 2024"
        SubTitle="Open-sourcing our projects on Tailwind CSS v4.0"
        SubText={
            <>Last summer at Tailwind Connect <span className="border-b border-sky-400 font-medium">i shared a preview of Oxide</span>— a new high-performance engine for<br></br>
            Tailwind CSS that we've been working on, designed to simplify the developer experience and take<br></br>
             advantage of how the web platform has envolved since Tailwind was first released
            </>
        }/>
        <SectionItemsBlog
        Date="Dec 20, 2023"
        SubTitle="Introducing Catalyst: A modern UI kit for React"
        SubText={
            <>Today's the day — we just published the first development preview of Catalyst, our first fully-<br></br>
            componentized, batteries-included application UI kit for React, just in time for your<br></br>
            holiday hacking sessions
            </>
        }/>
        <SectionItemsBlog
        Date="Dec 19, 2023"
        SubTitle={
        <>Tailwind CSS v3.4: Dynamic viewport units, :has() support, balanced headlines,<br></br> subgrid, and more
        </>
        }
        SubText={
        <>There's nothing like building <span className="border-b border-sky-400 font-medium">A major new project </span>
        for finding all the new features you wish you had in<br></br>
        your own tools, so we capitalize on some of that inspiration and turned it into this — Tailwind CSS v3.4.
        </>
        }/> 
        <SectionItemsBlog
        Date="Dec 18, 2023"
        SubTitle="HeroIcons Micro: What are these, icons for ants?"
        SubText={
        <>We just released  HeroIcons v2.1 which includes a brand new micro style  — <br></br>
        a full set of almost three hundred 16x16 icons designed for tighter, higher <br></br>
        density UIs 
        </>
        }/>
        <SectionItemsBlog 
        Date="Aug 7, 2023"
        SubTitle="Meet Studio: Our Beautiful new agency site template"
        SubText={
            <>We just released <span className="border-b border-sky-400 font-medium">Studio</span>
             — a beautiful new agency website template we've been working on for the<br></br>
             last couple of months for Tailwind UI.</>
        }/>
        <SectionItemsBlog
        Date="Jul 19, 2023"
        SubTitle="Tailwind Connect 2023:Recap of our first in-person event"
        SubText={
            <>Last month, over 200 people got together in my hometown of Cambridge, Ontario to hang out, talk<br></br>
            shop, and get a peek behind the curtain at some of the new stuff we've been working on.
            </>
        }/>\
        <SectionItemsBlog
        Date="Apr 24, 2023"
        SubTitle="New changeLog template + the biggest Tailwind UI update ever "
        SubText={
        <>Over the last four months we've probably done more work on Tailwind UI than we ever had, and<br></br>
        having finally wrapped up What we set to achieve i'm excited to lay it all out for you
        </>
        }/>
        <SectionItemsBlog
        Date ="Mar 28, 2023"
        SubTitle={
            <>Tailwind CSS v3.3: Extended color palette, ESM/TS support, logical properties, and <br></br> more
            </>}
        SubText={
            <> Tailwind CSS v3.3 is here — bringing a bunch of new features people been asking for forever, <br></br>
            and a bunch of stuff you didnt even know you wanted
            </>
        }/>
        




<Footer />
    </div>
}   