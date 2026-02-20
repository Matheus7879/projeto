import { BlogTitle } from "../components/BlogTitle"
import { Footer } from "../components/Footer"
import { SectionItemsBlog } from "../components/SectionItemsBlog"

export function BlogPage() {
    return <main>
        <BlogTitle Title="Latest Updates"
            Subtitle="All the latest Tailwind CSS news, straight from the team." />
        <SectionItemsBlog
            Date="Jul 25, 2025"
            SubTitle="Vanilla JavaScript support for Tailwind Plus"
            SubText={<>
                There are a lot of UI blocks in Tailwind Plus that need JavaScript to really be useful, like dialogs,<br></br>
                dropdowns, command palettes, and more. And unless you're a React or Vue user, using those UI<br></br>
                blocks has always meant writing all of that tricky JavaScript yourself. Well today that finally changes...
            </>} Read />
        <SectionItemsBlog
            Date="May 14, 2025"
            SubTitle="Compass: A starter kit for online courses"
            SubText={
                <>I've been itching to get back into screencasting and teaching lately, and the natural first step was to<br></br>
                    build our own course platform. So we just released <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700">Compass</span>
                    , a Next.js starter kit for publishing your<br></br>
                    own online course.
                </>} />
        <SectionItemsBlog
            Date="Apr 03, 2025"
            SubTitle="Tailwind CSS v4.1: Text shadows, masks, and tons more"
            SubText={
                <>I wasn't sure it would ever happen but we did it — we released a version of Tailwind CSS that<br></br>
                    includes text shadow utilities. Tailwind CSS v4.1 is here and it's packed with improvements that will<br></br>
                    help you (or your LLM, you coward) build even better interactive experiences.
                </>} />
        <SectionItemsBlog
            Date="Mar 04, 2025"
            SubTitle="Tailwind UI is now Tailwind Plus"
            SubText={
                <>We just shipped a huge rebrand project, turning what was previously known as Tailwind UI into<br></br>
                    Tailwind Plus. Tailwind Plus is the all same high-quality resources you know from Tailwind UI, but<br></br>
                    with all-new possibilities and potential.
                </>} />
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
                <>About eight months ago we <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700">open-sourced our progress</span> on Tailwind CSS v4.0. Hundreds of hours of<br></br>
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
                    Tailwind UI. It's called <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700">Radiant</span>, and you can start using it today.
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
            } />
        <SectionItemsBlog
            Date="May 07, 2024"
            SubTitle="Headless UI v2.0 for React"
            SubText={
                <>Nothing beats actually building something real with your own tools when it comes to finding ways to <br></br>
                    make things better. As we've been working on <span className="border-b border-blue-300 font-medium cursor-pointer hover:border-sky-700">Catalyst</span> these last several months, we've been<br></br>
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
            } />
        <SectionItemsBlog
            Date="Mar 06, 2024"
            SubTitle="Open-sourcing our projects on Tailwind CSS v4.0"
            SubText={
                <>Last summer at Tailwind Connect <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700">i shared a preview of Oxide</span>— a new high-performance engine for<br></br>
                    Tailwind CSS that we've been working on, designed to simplify the developer experience and take<br></br>
                    advantage of how the web platform has envolved since Tailwind was first released
                </>
            } />
        <SectionItemsBlog
            Date="Dec 20, 2023"
            SubTitle="Introducing Catalyst: A modern UI kit for React"
            SubText={
                <>Today's the day — we just published the first development preview of Catalyst, our first fully-<br></br>
                    componentized, batteries-included application UI kit for React, just in time for your<br></br>
                    holiday hacking sessions
                </>
            } />
        <SectionItemsBlog
            Date="Dec 19, 2023"
            SubTitle={
                <>Tailwind CSS v3.4: Dynamic viewport units, :has() support, balanced headlines,<br></br> subgrid, and more
                </>
            }
            SubText={
                <>There's nothing like building <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700">A major new project </span>
                    for finding all the new features you wish you had in<br></br>
                    your own tools, so we capitalize on some of that inspiration and turned it into this — Tailwind CSS v3.4.
                </>
            } />
        <SectionItemsBlog
            Date="Dec 18, 2023"
            SubTitle="HeroIcons Micro: What are these, icons for ants?"
            SubText={
                <>We just released  HeroIcons v2.1 which includes a brand new micro style  — <br></br>
                    a full set of almost three hundred 16x16 icons designed for tighter, higher <br></br>
                    density UIs
                </>
            } />
        <SectionItemsBlog
            Date="Aug 07, 2023"
            SubTitle="Meet Studio: Our Beautiful new agency site template"
            SubText={
                <>We just released <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700">Studio </span>
                    — a beautiful new agency website template we've been working on for the<br></br>
                    last couple of months for Tailwind UI.</>
            } />
        <SectionItemsBlog
            Date="Jul 19, 2023"
            SubTitle="Tailwind Connect 2023: Recap of our first in-person event"
            SubText={
                <>Last month, over 200 people got together in my hometown of Cambridge, Ontario to hang out, talk<br></br>
                    shop, and get a peek behind the curtain at some of the new stuff we've been working on.
                </>
            } />\
        <SectionItemsBlog
            Date="Apr 24, 2023"
            SubTitle="New changeLog template + the biggest Tailwind UI update ever "
            SubText={
                <>Over the last four months we've probably done more work on Tailwind UI than we ever had, and<br></br>
                    having finally wrapped up what we set to achieve i'm excited to lay it all out for you
                </>
            } />
        <SectionItemsBlog
            Date="Mar 28, 2023"
            SubTitle={
                <>Tailwind CSS v3.3: Extended color palette, ESM/TS support, logical properties, and <br></br> more
                </>}
            SubText={
                <> Tailwind CSS v3.3 is here — bringing a bunch of new features people been asking for forever, <br></br>
                    and a bunch of stuff you didnt even know you wanted
                </>
            } />
        <SectionItemsBlog
            Date="Dec 15, 2022"
            SubTitle="Protocol: A beautiful starting point for your next API documentation site"
            SubText={
                <>It's been months in the making but i'm excited to finally realease our next website template — <br></br>
                    <span className="font-medium border-b border-sky-400 cursor-pointer hover:border-sky-700">Protocol</span>, a beautiful starter kit for buiding amazing API reference websites
                </>} />
        <SectionItemsBlog
            Date="Oct 19, 2022"
            SubTitle="Tailwind CSS v3.2: Dynamic Breakpoints, multi-config, and container queries, oh my!"
            SubText={
                <>Well it's that time again! The time where we quickly go from "i really have no idea what we could<br></br>
                    even add to a new Tailwind release" to "wow, well this is actually a ridiculous amont of new stuff — <br></br>
                    we better tag a release before things get completely out of hand".
                </>} />
        <SectionItemsBlog
            Date="Set 09, 2022"
            SubTitle="We built you a new personal website + Heroicons v2.0, Headless UI v1.7"
            SubText={
                <>We just released a new stunning new personal website template for Tailwind UI, redesigned Heroicons<br></br>
                    from scratch, tagged a new version of Headless UI with some excting new features, and more.
                </>} />
        <SectionItemsBlog
            Date="Aug 19, 2022"
            SubTitle="New Tailwind CSS + Framer Motion template and Tailwind Jobs"
            SubText={<>All about the brand new Tailwind UI template we just shipped, the official Tailwind CSS job board,<br></br>
                and a bunch of new projects coming out in the next few weeks.
            </>} />


        <SectionItemsBlog
            Date="Aug 19, 2022"
            SubTitle="Tailwind UI: Site templates and all-access"
            SubText={<>When i was early in my programming carrer, i loved following
                <span className="font-medium border-b border-sky-400  cursor-pointer hover:border-sky-700"> thoughtbot. </span>
                They were always writing <br></br>interesting programming articles and producing fantastic screencast.
            </>} />
        <SectionItemsBlog
            Date="June 07, 2022"
            SubTitle="Tailwind CSS v3.1!"
            SubText={<>It's been about six months since we released
                <span className="border-b border-sky-400 font-medium cursor-pointer hover:border-sky-700"> Tailwind CSS v3.0, </span>
                and even though we've been<br></br> collecting a lot of little improvements in the codebase since then, we just
                didn't have that-one-<br></br>feature yet that makes you "okay it's release-cutting'time"
            </>} />
        <SectionItemsBlog
            Date="May 27, 2022"
            SubTitle={<>Headless UI V1.6, Tailwind UI team management, Tailwind Play improvements, and<br></br>more
            </>}
            SubText={<>It's been a while since i've written about what we've been working on so i have a lot to share! Too<br></br>
                much honestly — my main motivator for even getting this update out is that we've  got even more <br></br>
                stuff coming next week, and i feel like i'm not allowed to share that stuff until i share all of the stuff...
            </>} />
        <SectionItemsBlog
            Date="Feb 24, 2022"
            SubTitle="Headless UI v1.5: The one with Comboboxes"
            SubText={<>We just released Headless UI v1.5, which includes a brand new 'Combobox' component.<br></br>
                Comboboxes are like select control but with autocomplete/typehead functionality.
            </>} />
        <SectionItemsBlog
            Date="Jan 24, 2022"
            SubTitle="Automatic Class Sorting with Prettier"
            SubText={<>People have been talking about the best way to sort your utility classes in Tailwind projects for at<br></br>
                <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">least four years. </span>
                Today we're excited to announce that you can finally stop worrying about it with <br></br>
                the release of our official Prettier plugin for Tailwind CSS.
            </>} />
        <SectionItemsBlog
            Date="Dec 17, 2021"
            SubTitle="Effortless Typography, Even in Dark Mode"
            SubText={<>Today we're announcing the next version of the Tailwind CSS Typography plugin, which brings easy <br></br>
                dark mode support, a brand new customization API, and the 'not-prose' class i wasn't sure we'd<br></br>
                ever figure out how to support
            </>} />
        <SectionItemsBlog
            Date="Dec 16, 2021"
            SubTitle="Standalone CLI: Use Tailwind CSS without Node.js"
            SubText={<>Tailwind CSS is written in JavaScript and distribuited as an npm package, which means you've<br></br>
                always had to have Node.js and npm installed to use it. Today we're announcing a new standalone<br></br>
                <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-700">CLI Build </span>
                that gives you the full power of Tailwind CLI in a self-contained executable — no Node.js...
            </>} />
        <SectionItemsBlog
            Date="Dec 09, 2021"
            SubTitle="Tailwind CSS v3.0"
            SubText={<>Tailwind CSS v3.0 is here — bringing incredible perfomance gains, huge workflow improvements,<br></br>
                and a seriously ridiculous number of new features.
            </>} />
        <SectionItemsBlog
            Date="Aug 11, 2021"
            SubTitle="Introducing Tailwind UI Ecommerce"
            SubText={<>Almost 6 months in the making, we finally released
                <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700"> Tailwind UI Ecommerce</span> —
                the first all-new<br></br> component kit for Tailwind UI since the initial lauch back in February 2020.
            </>} />
        <SectionItemsBlog
            Date="Jul 29, 2021"
            SubTitle="Headless UI v1.4: The one With Tabs"
            SubText={<>We just released Headless UI v1.4, which includes a brand new 'Tab' component, and new APIs for<br></br>
                mannualy closing 'Popover' and 'Disclosure' components more easily
            </>} />
        <SectionItemsBlog
            Date="Jun 17, 2021"
            SubTitle="Tailwind CSS v2.2"
            SubText={<>Well i can't say we were really planning on it but over the last few weeks we've been having a ton of<br></br>
                fun dumping new and exciting features into Tailwind and now feels like the right time to cut a release, <br></br>
                so here it is — Tailwind CSS v2.2!
            </>} />
        <SectionItemsBlog
            Date="Apr 14, 2021"
            SubTitle="Headless UI v1.0"
            SubText={<>Last fall we announced Headless UI, a library of completely unstyled, fully accessible UI<br></br>
                components, designed to pair perfectly with Tailwind CSS. Today we're super excited to released<br></br>
                <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">Headless UI v1.0</span>, which more than doubles the amount of included components for both React and...
            </>} />
        <SectionItemsBlog
            Date="Apr 05 , 2021"
            SubTitle="Tailwind CSS v2.1"
            SubText={<>The first new feature update since Tailwind CSS v2.0 is here and loaded with lots of cool stuff! We've<br></br>
                merged the new JIT engine to core, added first-class support for composable CSS filters, added<br></br>
                blending more utilities, and a bunch more.
            </>} />

        <SectionItemsBlog
            Date="Mar 29, 2021"
            SubTitle="Heroicons v1.0"
            SubText={<>Just over a year ago we released the very first version of <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-300">Heroicons</span>,
                which is a set of beautiful UI<br></br>icons we designed along Tailwind UI. Since then we've added tons of new icons, and designed<br></br>
                and launched a dedicated web experience. Today we're excited to finally release Heroicons v.1.0...
            </>} />

        <SectionItemsBlog
            Date="Mar 15, 2021"
            SubTitle="Just-In-Time: The next generation of Tailwind CSS"
            SubText={<>One of the hardest constraints we've had to deal with as we've improved Tailwind CSS over the<br></br>
                years is the generated file size in development. With enough customization to your config file, the<br></br>
                generated CSS can reach 10mb or more, and there's only so much CSS that build tools and even...
            </>} />
        <SectionItemsBlog
            Date="Mar 08, 2021"
            SubTitle="Welcoming James McDonald to Tailwind Labs"
            SubText={<>Many years ago i got a message from <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">Steve </span>
                that said something like "Have i ever shared this guy's<br></br>
                Dribble profile with you before? Been following him forever, some of my absolute favorite work i've<br></br>
                ever found". That person was <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">James McDonald</span>,
                and today we're totally over the moon to share that...
            </>} />
        <SectionItemsBlog
            Date="Feb 16, 2021"
            SubTitle="'Tailwind CSS: From Zero to Production' on Youtube"
            SubText={<>Today we're excited to release <span>Tailwind CSS: From Zero to Production</span>, a new screencast series that<br></br>
                teaches you everything you need to know to get up and running with Tailwind CSS v2.0 from scratch.
            </>} />

        <SectionItemsBlog
            Date="Feb 01, 2021"
            SubTitle="Welcoming David Luhr to Tailwind Labs"
            SubText={<>We started working with <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-700">David Luhr </span>
                last summer on a project-by-project basis to help us develop a <br></br>
                Figma version of <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-700">Tailwind UI </span>(almost ready!), as well as to leverage his accessibily<br></br>
                expertise when <br></br> building Tailwind UI templates, ensuring we were following best practices and delivering markup That
            </>} />

        <SectionItemsBlog
            Date="Jan 24, 2021"
            SubTitle="Multi-line truncation with @tailwindcss/line-clamp"
            SubText={<>Imagine you're implemeting a beautiful design for you or someone on your team carefully crafted in<br></br>
                Figma. You've nailed all the different layouts at each breakpoint, perfected the withespace and<br></br>
                typography, and the photography you're using is really bringing the desing to life...
            </>} />

        <SectionItemsBlog
            Date="Nov 18, 2020"
            SubTitle="Tailwind CSS v2.0"
            SubText={<>Almost exactly 18 months ago we released Tailwind CSS v1.0, which signalled a commitment to<br></br>
                stability while continuing to push the boundaries with exciting new features with every minor release.
            </>} />

        <SectionItemsBlog
            Date="Oct 13, 2020"
            SubTitle="Tailwind CSS v2.0"
            SubText={<>We just released Tailwind CSS v1.9 which adds support for configuration presets, useful new CSS<br></br>
                grid utilities , extended border radius, rotate, and skew scales, helpful accessibility improvements,<br></br>
                and more!
            </>} />

        <SectionItemsBlog
            Date="Oct 07, 2020"
            SubTitle="Introducing Tailwind Play"
            SubText={<>To get the most of Tailwind, you need a build step. It's the only way to be able to customize your<br></br>
                <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-700">tailwind.config.js</span> file, extract with <span className="cursor-pointer border-b border-sky-300 font-medium hover:border-sky-700">@apply</span>
                , or include <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-700">plugins.</span>
            </>} />

        <SectionItemsBlog
            Date="Oct 06, 2020"
            SubTitle="Headless UI: Unstlyed, Acessible UI Components"
            SubText={<>One of the biggest pain points when building modern web applications is building custom<br></br>
                components like select menus, dropdowns, toggles, modals, tabs, radios groups — components that<br></br>
                are pretty similar from project to project, but never quite the same.
            </>} />

        <SectionItemsBlog
            Date="Sep 23, 2020"
            SubTitle="'What's new in Tailwind CSS?' On Youtube"
            SubText={<>A lot of cool stuff has been added to Tailwind since the last time we published any screencast, so<br></br>
                we thought it would be a great idea to record a little series that covers all of the new additions.
            </>} />

        <SectionItemsBlog
            Date="Set 04, 2020"
            SubTitle="Tailwind CSS v1.8.0"
            SubText={<>Tailwind CSS v1.8 is now available with a handful of new utilities, a couple new features , and an<br></br>
                exciting new experiment!
            </>} />

        <SectionItemsBlog
            Date="Aug 27, 2020"
            SubTitle="Utility-Friendly Transitons with Tailwind @tailwindui/react"
            SubText={<>Back in February we released <span className="border-b border-sky-300 font-medium cursor-pointer hover:border-sky-700">Tailwind UI</span>,
                a directory of HTML component example designed for<br></br>
                you to copy and paste into your Tailwind projects as a starting point for your own designs.
            </>} />

        <SectionItemsBlog
            Date="Aug 25, 2020"
            SubTitle="Introducing Heroicons.com"
            SubText={<>A few months back we quietly released <span className="cursor-pointer border-b border-sky-300 font-medium hover:border-sky-300">Heroicons</span>
                , a set of free SVG icons we initially designed to<br></br>support the components in Tailwind UI. Today we're launching
                the official <span className="border-b border-sky-300  font-medium cursor-pointer hover:border-sky-700">Heroicons web</span>
            </>} />
        <SectionItemsBlog
            Date="Aug 18, 2020"
            SubTitle="Tailwind CSS v1.7.0"
            SubText={<>Another new Tailwind release is here! This time with support from gradients, background-clip,<br></br>
                experimental support for using <span className="font-medium">'@apply'</span> with variant utilities, and tons more. Let's dig in!
            </>} />

        <SectionItemsBlog
            Date="Aug 10, 2020"
            SubTitle="From nine hundred to one: How Robin Malfail got in the team"
            SubText={<>Back in May we publised <span className="cursor-pointer font-medium border-b border-sky-300 hover:border-sky-700">our first job posting </span>
                to help us find a full-stack developer to join our team. <br></br>
                After receiving almost 900 applications and interviewing dozens of talended people, we're excited to<br></br>
                finally share that <span className="font-medium border-b cursor-pointer border-sky-300 hover:border-sky-700">Robin Malfail</span> accepted our
                offer for the position and is offically part of the...
            </>} />

        <SectionItemsBlog
            Date="Jul 28, 2020"
            SubTitle="Tailwind CSS v1.6.0"
            SubText={<>It's like Tailwind CSS v1.5 expect now there's animation support, overscroll utilities, and more!
            </>} />

        <SectionItemsBlog
            Date="Jul 19, 2020"
            SubTitle="Simon Vrachliotis Joins Tailwind Labs"
            SubText={<>Today we are super excited to share <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">Simon Vrachliotis </span>
                has joined the development team at <br></br> Tailwind Labs!(we just finalized that new bussiness name by the way)
            </>} />

        <SectionItemsBlog
            Date="Jul 18, 2020"
            SubTitle="Welcoming Brad Cornes to the Team"
            SubText={<>Bacl in June, <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">Brad Cornes </span>
                joined our company as our first team member. We didn't have a blog <br></br> to announce it back
                then, but better late than never right?
            </>} />

        <SectionItemsBlog
            Date="Jul 15, 2020"
            SubTitle="Tailwind CSS v1.5.0"
            SubText={<>I was hoping to save v1.5.0 for something really exciting but we needed a new feature to support the<br></br>
                new <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">'@tailwindcss/typography'</span> plugin so we're dropping some new stuff on your early.
            </>} />

        <SectionItemsBlog
            Date="Jul 13, 2020"
            SubTitle="Introducing Tailwind CSS Typography"
            SubText={<>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that<br></br>
                required a green eye for typography and a lot of complex custom CSS.<br></br>
                That's why today we're excited to release <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">@tailwindcss/typography</span>
                — a plugin that lets you easily...
            </>} />

        <SectionItemsBlog
            Date="Jun 30, 2020"
            SubTitle="Buiding the Tailwind Blog with Next.js"
            SubText={<>One of the things we belive as a team is that everything we make should be <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">sealed with a blog post</span>.<br></br>
                Forcing ourselves to write up a short announcement post for every project we work on acts as<br></br>
                a built-in quality check, making sure that we never call a project "done" until we feel comfortable...
            </>} />

        <SectionItemsBlog
            Date="Jun 23, 2020"
            SubTitle="Introducing linting for Tailwind CSS IntelliSense"
            SubText={<>Today we're releasing a new version of the <span className="font-medium border-b border-sky-300 cursor-pointer hover:border-sky-700">Tailwind CSS IntelliSense for VS Code</span><br></br>
                that adds Tailwind-specific linting to both your CSS and your markup.
            </>} />



        <Footer />
    </main>
}   