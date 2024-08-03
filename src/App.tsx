// Import: Core
import { useState } from "react";
import "./App.css";

// Import: Shadcn
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

// Import: Form Components
import Navigation from "@/components/form/Navigation";
import HomeContent from "@/components/form/HomeContent";
import BrowseContent from "@/components/form/BrowseContent";
import InfoContent from "@/components/form/InfoContent";

// App
function App() {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageSwitch = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex justify-center">
            <div className="sm:w-full lg:w-9/12">
                <ThemeProvider>
                    <Navigation
                        Page={currentPage}
                        onPageSwitch={handlePageSwitch}
                    ></Navigation>

                    {currentPage == 0 ? (
                        <HomeContent
                            onPageSwitch={handlePageSwitch}
                        ></HomeContent>
                    ) : null}
                    {currentPage == 1 ? <BrowseContent></BrowseContent> : null}
                    {currentPage == 2 ? (
                        <InfoContent
                            onPageSwitch={handlePageSwitch}
                        ></InfoContent>
                    ) : null}
                </ThemeProvider>
            </div>
            <Toaster />
        </div>
    );
}

export default App;
