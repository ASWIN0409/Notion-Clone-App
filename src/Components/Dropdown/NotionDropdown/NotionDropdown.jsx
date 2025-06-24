import Button1 from "../../Button/Button1/Button1";
import Card3 from "../../CardComponents/Card3/Card3";

function NotionDropdown() {
    return (
        <div className="absolute z-50 flex w-full grid-cols-3 gap-8 p-4 mt-2 bg-white border shadow-xl top-14">

            {/* Column 1 */}
            <div className="basis-[25%]">
                <h4 className="mb-2 font-semibold">Features</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <Card3 heading="Notion AI" description="Build, write, automate" />
                    <Card3 heading="Docs" description="Simple & powerful" />
                    <Card3 heading="Wikis" description="Centralize your knowledge" />
                    <Card3 heading="Projects" description="Manage any project" />
                </ul>
            </div>

            {/* Column 2 */}
            <div className="basis-[25%]">
                <h4 className="mb-2 font-semibold">New Tools</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <Card3 heading="Enterprise Search" description="Find answers instantly" />
                    <Card3 heading="AI Meeting Notes" description="Perfectly written by AI" />
                    <Card3 heading="Forms" description="Responses and requests" />
                    <Card3 heading="Sites" description="Publish anything, fast" />
                </ul>
            </div>

            {/* Column 3 */}
            <div className="basis-[25%]">
                <h4 className="mb-2 font-semibold">Get Started</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <Card3 heading="Browse marketplace" description="Templates for everything" />
                    <Card3 heading="View integrations" description="Connect your apps with Notion" />
                    <Card3 heading="Download web clipper" description="Save from the web into Notion" />
                </ul>
            </div>

            {/* Column 4 */}
            <div className="basis-[25%] bg-gray-200 rounded-md">
                <div className="basis-[50%] flex flex-col gap-3 p-2 justify-center items-center">
                    <h3>Try the Notion desktop app for a faster experience</h3>
                    <Button1 text="Download App" />
                </div>
                <div className="basis-[50%]">
                    <img src="notion_background.avif" alt="" />
                </div>

            </div>

        </div>
    );
}

export default NotionDropdown;