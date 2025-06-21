import ImageCard2 from "../../Components/CardComponents/ImageCard2/ImageCard2";
import ImageCard3 from "../../Components/CardComponents/ImageCard3/ImageCard3";

function AboutUsPage() {
    return (
        <main className="w-[70vw] mx-auto h-full ">
            <h3 className="text-lg text-gray-400 mt-28 lg:text-2xl">About Notion</h3>
            <h1 className="mt-4 mb-20 text-4xl font-bold lg:text-6xl">A story of tools and the future of work.</h1>
            <ImageCard2
                src="thumbnail1.avif"
                content="Hi there! If you're reading this, you're probably like me—spending most of your days in your office, in front of a computer."
            />
            <ImageCard2
                src="thumbnail2.avif"
                content="You probably have fifteen tabs open: one for email, one for Slack, one for Google Docs, and on, and on…
                      But have you ever thought about where these “work tools” came from? Or why there are so many of them?
                      To answer these questions, and to explain why we created Notion, we have to travel back in time."
            />
            <ImageCard2
                src="thumbnail3.avif"
                content="As people flooded to factories during the Industrial Revolution, many tools were invented to ease the management overload.
                     Typewriters replaced illegible handwriting. File cabinets stored more information than any clerk could remember (and also won the gold medal at the 1893 Chicago World's Fair!)
                     Tools like these paved the way for offices as we know them today."
            />
            <ImageCard2
                src="thumbnail4.avif"
                content="Fast forward to the 1950s, when computers came into the workplace.
                     At first, they were lifeless, room-sized monsters that operated on paper and punch cards. They were used solely for number-crunching."
            />
            <ImageCard2
                src="thumbnail5.avif"
                content="Then something magical happened in the 1970s!
                     A generation of pioneers saw the computer as something far beyond a number-crunching machine. They dreamt a future where computers could amplify imagination (Alan Kay), augment intellect (Doug Engelbart), and expand our thoughts far beyond text on paper (Ted Nelson).
                     A tool unlike anything we have seen before."
            />
            <ImageCard2
                src="thumbnail6.avif"
                content="And that's where we are today.
                     Google Docs made typewriters multiplayer. Dropbox brought file cabinets to the cloud. But conceptually, they evolved little beyond their Industrial Revolution ancestors.
                     We duct-tape everything together with emails, copy/paste, and countless open tabs."
            />
            <ImageCard2
                src="thumbnail7.avif"
                content="That's where Notion comes in. We want to break away from today's tools—and bring back some of the ideas of those early pioneers.
                     As a first step, we are blending much of your workflow into an all-in-one workspace. Want a task list? A product roadmap? A design repository? They are now all in one place. You can even customize your own workspace from dozens of LEGO-style building blocks.
                     Solve your problems your way, bounded only by your imagination."
            />
            <ImageCard2
                src="thumbnail8.avif"
                content="Hopefully you've gotten a good sense of why we started Notion.
                     Challenging the status quo is not an easy task. Check out the product! Write in! We need early adopters like you to start a movement.
                     See you soon!
                     “The best way to predict the future is to invent it.”"
            />

            <h3 className="mt-10 text-2xl font-bold lg:mt-28 lg:text-3xl">“The best way to predict the future is to invent it.”</h3>
            <h4 className="mb-10 text-2xl font-thin lg:mb-28">Alan Kay, computing pioneer</h4>

            <hr className="bg-gray-300 w-[60vw] mx-auto" />

            <div className="flex flex-col gap-4">
                <h4 className="mt-10 text-2xl font-bold">Join Us</h4>
                <p className="tracking-wider">Notion is based in the sunny Mission district of San Francisco. We are a diverse group of people interested in computing, history, art, alternative programming languages, and skateboarding.</p>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="mt-10 text-2xl font-bold">In the news</h4>
                <p className="tracking-wider">Just a few of the stories about Notion in the tech and business press.</p>
            </div>

            <div className="grid grid-cols-1 p-2 m-2 mx-auto my-16 gap-x-2 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
                <ImageCard3
                src="forbes.avif"
                href="https://www.forbes.com/sites/kenrickcai/2024/04/11/10-billion-productivity-startup-notion-wants-to-build-your-ai-everything-app/"
                 />
                 <ImageCard3
                src="fastCompany.avif"
                href="https://www.fastcompany.com/91037133/workplace-most-innovative-companies-2024"
                 />
                 <ImageCard3
                src="tech-crunch.png"
                href="https://www.fastcompany.com/91037133/workplace-most-innovative-companies-2024"
                 />
                 <ImageCard3
                src="new-york-times.avif"
                href="https://www.forbes.com/sites/kenrickcai/2024/04/11/10-billion-productivity-startup-notion-wants-to-build-your-ai-everything-app/"
                 />
                 <ImageCard3
                src="wall-street-journal.avif"
                href="https://www.fastcompany.com/91037133/workplace-most-innovative-companies-2024"
                 />
                 <ImageCard3
                src="verge.png"
                href="https://www.fastcompany.com/91037133/workplace-most-innovative-companies-2024"
                 />
            </div>

        </main>
    );
}

export default AboutUsPage;