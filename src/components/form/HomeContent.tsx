import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import EasyDemonIcon from "/assets/EasyDemon.png";
import MediumDemonIcon from "/assets/MediumDemon.png";
import HardDemonIcon from "/assets/HardDemon.png";
import InsaneDemonIcon from "/assets/InsaneDemon.png";
import ExtremeDemonIcon from "/assets/ExtremeDemon.png";

const DemonIconList = [
    EasyDemonIcon,
    MediumDemonIcon,
    HardDemonIcon,
    InsaneDemonIcon,
    ExtremeDemonIcon,
];

import { Search as SearchIcon } from "lucide-react";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { FileText as FileTextIcon } from "lucide-react";
import { Code as CodeIcon } from "lucide-react";
import { Users as UsersIcon } from "lucide-react";

interface Props {
    onPageSwitch: (page: number) => void;
}

export default function HomeContent(props: Props) {
    const switchToBrowse = () => {
        props.onPageSwitch(1);
    };

    const switchToInfo = () => {
        props.onPageSwitch(2);
    };

    return (
        <div className="pt-3 px-5 w-full flex flex-col items-center justify-center gap-8">
            <div className="w-full border-2 rounded-xl p-8 flex flex-col">
                <div className="flex gap-2 items-center">
                    <img
                        className="w-7.5 h-7"
                        src={DemonIconList[Math.floor(Math.random() * 5)]}
                    ></img>
                    <h1 className="text-2xl font-bold">
                        Welcome to the Demon Finder!
                    </h1>
                </div>

                <p className="text-sm">(Alpha v0.1)</p>

                <div className="flex justify-center items-center sm:w-full lg:w-8/12">
                    <p className="py-4">
                        The Geometry Dash Demon Finder is a project that lets
                        you find your next demon efficiently. By using the data
                        from the{" "}
                        <u>
                            <a href="https://docs.google.com/spreadsheets/d/1xaMERl70vzr8q9MqElr4YethnV15EOe8oL1UV9LLljc">
                                Demon Ladder spreadsheet
                            </a>
                        </u>
                        , you can view what the community thinks on thousands of
                        demons.
                        <Button
                            onClick={switchToInfo}
                            variant={"outline"}
                            className="ml-2 pl-3 pr-3 h-6 gap-1"
                        >
                            Read More
                            <ArrowRightIcon className="ml-1 w-4 h-4" />
                        </Button>
                    </p>
                </div>

                <Button onClick={switchToBrowse} className="h-12 w-48 gap-2">
                    <SearchIcon />
                    Jump In!
                </Button>
            </div>

            <div className="w-full border-2 rounded-xl p-8 flex flex-col">
                <p className="text-2xl">
                    <b>Q/A</b>
                </p>

                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            I found a bug or want to suggest a feature.
                        </AccordionTrigger>
                        <AccordionContent>
                            Visit the{" "}
                            <u>
                                <a href="https://github.com/Outbroken/DemonFinder/issues">
                                    Github Page
                                </a>
                            </u>{" "}
                            and create an issue.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            How are difficulty and enjoyment ranked?
                        </AccordionTrigger>
                        <AccordionContent className="flex gap-2">
                            <p>
                                View the{" "}
                                <Button
                                    onClick={switchToInfo}
                                    variant={"outline"}
                                    className="ml-1 mr-1 pl-3 pr-3 h-6 gap-1"
                                >
                                    Info Page
                                    <ArrowRightIcon className="ml-1 w-4 h-4" />
                                </Button>
                                or the{" "}
                                <u>
                                    <a href="https://docs.google.com/spreadsheets/d/1xaMERl70vzr8q9MqElr4YethnV15EOe8oL1UV9LLljc">
                                        Demon Ladder Spreadsheet
                                    </a>
                                </u>{" "}
                                for an explanation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Why do some creators' names say 'Unregistered'?
                        </AccordionTrigger>
                        <AccordionContent>
                            This means they haven't made an official account.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex items-center justify-center gap-2 pb-10">
                <a href="https://github.com/Outbroken/DemonFinder">
                    <Button
                        variant="outline"
                        className="flex gap-2 hover:underline"
                    >
                        <CodeIcon />
                        Source
                    </Button>
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1xaMERl70vzr8q9MqElr4YethnV15EOe8oL1UV9LLljc">
                    <Button
                        variant="outline"
                        className="flex gap-2 hover:underline"
                    >
                        <FileTextIcon />
                        Data
                    </Button>
                </a>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="outline" className="flex gap-2">
                            <UsersIcon />
                            Credits
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Credits</DialogTitle>
                        </DialogHeader>
                        <Separator />
                        <div>
                            <p>
                                <b>- Outbroken</b>
                            </p>
                            <p className="text-sm">
                                Created pretty much everything
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>- Demon Ladder Staff</b>
                            </p>
                            <p className="text-sm">
                                This website wouldn't be possible without the
                                data they collected
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>- The Geometry Dash Community</b>
                            </p>
                            <p className="text-sm">
                                For just being a great community in general
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
