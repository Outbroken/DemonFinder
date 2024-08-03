import { Button } from "@/components/ui/button";

import { Search as SearchIcon } from "lucide-react";
import { Info as InfoIcon } from "lucide-react";
import { Home as HomeIcon } from "lucide-react";

import { ModeToggle } from "../mode-toggle";

interface Props {
    onPageSwitch: (page: number) => void;
    Page: number;
}

export default function Navigation(props: Props) {
    const switchToHome = () => {
        props.onPageSwitch(0);
    };

    const switchToBrowse = () => {
        props.onPageSwitch(1);
    };

    const switchToInfo = () => {
        props.onPageSwitch(2);
    };

    return (
        <div className="z-10 sticky top-0 backdrop-blur-sm p-5 pb-0 w-full flex flex-col">
            <div className="flex items-center pb-5">
                <div className="items-center flex gap-6 grow">
                    <Button
                        variant={props.Page == 0 ? "default" : "outline"}
                        onClick={switchToHome}
                    >
                        <HomeIcon className="mr-2 h-4 w-4" /> Home
                    </Button>
                    <Button
                        variant={props.Page == 1 ? "default" : "outline"}
                        onClick={switchToBrowse}
                    >
                        <SearchIcon className="mr-2 h-4 w-4" /> Browse
                    </Button>
                    <Button
                        variant={props.Page == 2 ? "default" : "outline"}
                        onClick={switchToInfo}
                    >
                        <InfoIcon className="mr-2 h-4 w-4" />
                        Info
                    </Button>
                </div>

                <div className="items-center justify-end flex gap-6 grow">
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    );
}
