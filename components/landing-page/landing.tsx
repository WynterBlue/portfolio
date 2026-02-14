import { Button } from "../ui/button";

export default function Landing() {
    return (
        <div className="flex flex-col">
            <div className=" flex flex-col transform-(--translate) self-center">
            <div className="bg-stone-700 rounded-t-lg border-4 border-stone-700 px-6 py-3 font-mono text-xl"> {/* window navigation bar */}
            <p className="flex grow flex-row justify-between text-white">home</p>
            </div>
            <div className="justify-center items-center flex flex-col bg-white dark:bg-secondary-dark border-2 border-gray-light dark:border-black rounded-b-xl m-0 shadow-flat w-(--window-width) h-(--window-height)"> {/*welcome window*/}
                <p className="text-center font-medium text-(length:--title-size) pt-(--title-padding) font-body">hi! <span className="text-primary font-bold"> i'm wynter</span></p>
                <div> {/*buttons that will open windows to new info*/}
                    <Button>
                    {/* about */}
                    about
                    </Button>
                    <Button>
                    {/* links */}
                    links
                    </Button>
                    <Button>
                    {/* work */}
                    work
                    </Button>
                    <Button>
                    {/* faqs */}
                    faq
                    </Button>
                    <Button>
                    {/* contact */}
                    contact
                    </Button>
                </div>
            </div>
            </div>

        </div>
    );
}