import { Link } from "react-router-dom";
import HeadingTag from "../TagComponents/HeadingTag";
import Para from "../TagComponents/Para";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

function Footer() {
    return (
        <footer className="bottom-0 w-[95vw] mx-auto border-t-2  border-gray-200 h-96">
            <div className="h-full w-[80vw] grid-cols-1  mx-auto grid md:grid-cols-3 gap-10 lg:grid-cols-5 items-center justify-center">

                {/* Column 1 */}
                <div className="h-[80%] w-[25%]flex flex-col gap-10 p-12">
                    <div className="flex gap-2 mb-14">
                        <InstagramIcon className="hover:text-pink-600" />
                        <XIcon className="hover:text-black"/>
                        <LinkedInIcon className="hover:text-blue-800"/>
                        <FacebookRoundedIcon className="hover:text-blue-500"/>
                        <YouTubeIcon className="hover:text-red-600"/>
                    </div>

                    <div>
                        <Para text="Do Not Sell or Share My Info" />
                        <HeadingTag heading="© 2025 Notion Clone Labs, Inc." />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="h-[80%] w-[20%]">
                    <HeadingTag heading="Company" />
                    <Para text="About us" />
                    <Para text="Careers" />
                    <Para text="Security" />
                    <Para text="Status" />
                    <Para text="Terms & privacy" />
                    <Para text="Your privacy rights" />
                </div>

                {/* Column 3 */}
                <div className="h-[80%] w-[20%]">
                    <HeadingTag heading="Download" />
                    <Para text="iOS & Android" />
                    <Para text="Mac & Windows" />
                    <Para text="Calendar" />
                    <Para text="Web Clipper" />
                </div>

                {/* Column 4 */}
                <div className="h-[80%] w-[20%]">
                    <HeadingTag heading="Resources" />
                    <Para text="Help center" />
                    <Para text="Pricing" />
                    <Para text="Blog" />
                    <Para text="Community" />
                    <Para text="Integrations" />
                    <Para text="Templates" />
                    <Para text="Affiliates" />
                </div>

                {/* Column 5 */}
                <div className="h-[80%] w-[15%]">
                    <HeadingTag heading="Notion for" />
                    <Para text="Enterprise" />
                    <Para text="Small business" />
                    <Para text="Personal" />
                    <Link to="/aboutus"><HeadingTag heading="Explore more →" /></Link>

                </div>

            </div>
        </footer>
    );
}

export default Footer;