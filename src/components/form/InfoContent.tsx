import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import EasyDemonIcon from "/assets/EasyDemon.png";
import MediumDemonIcon from "/assets/MediumDemon.png";
import HardDemonIcon from "/assets/HardDemon.png";
import InsaneDemonIcon from "/assets/InsaneDemon.png";
import ExtremeDemonIcon from "/assets/ExtremeDemon.png";

import { Search as SearchIcon } from "lucide-react";

import DemonCard from "@/components/form/DemonCard";
import DemonDifficultyReference from "@/components/form/DemonDifficultyReference";
import DemonEnjoymentReference from "@/components/form/DemonEnjoymentReference";

interface Demon {
    Title: string;
    Creator: string;
    RatedDifficulty: number;
    Difficulty: number;
    Enjoyment: number;
    DifficultyRatings: number;
    EnjoymentRatings: number;
    LevelId: number;
    id: number;
}

const TestDemon: Demon = {
    Title: "Clubstep",
    Creator: "RobTop",
    RatedDifficulty: 0,
    Difficulty: 2.8,
    Enjoyment: 6.17,
    DifficultyRatings: 185,
    EnjoymentRatings: 110,
    LevelId: 1,
    id: 0,
};

interface Props {
    onPageSwitch: (page: number) => void;
}

export default function InfoContent(props: Props) {
    const switchToBrowse = () => {
        props.onPageSwitch(1);
    };

    return (
        <div className="px-5 sm:w-full lg:w-[50rem] flex flex-col gap-4">
            <Separator />
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="font-bold text-2xl">
                        The Geometry Dash difficulties are too broad.
                    </h1>
                    <p>
                        Any player who's ever touched a few demons understands
                        this. Why should levels like <b>The Nightmare</b> be in
                        the same difficulty as <b>Sidestep</b>? Or why is{" "}
                        <b>Acu</b> the same as the current Top 1,{" "}
                        <b>Tidal Wave</b> when they are miles apart? Lastly, why
                        is it up to just one guy to give it a rating?
                    </p>
                </div>

                <div>
                    <h1 className="font-bold text-xl">
                        The Demon Ladder solves this, sort of.
                    </h1>
                    <p>
                        The demon ladder let's anyone have an opinion on how
                        hard a level should be. It also divides the broad
                        categories into smaller 'tiers'. There's one problem.
                        It's a spreadsheet. Filtering through a spreadsheet with
                        hundreds of thousands of entries is tedious and slow. It
                        can take 30 seconds just to search up a single level!
                    </p>
                </div>

                <div>
                    <h1 className="font-bold text-xl">
                        So, what's the solution?
                    </h1>
                    <p>
                        The Demon Finder! Using the data that the demon ladder
                        team has gathered, this website can filter through every
                        single level in a<b> few milliseconds</b>. Additionally,
                        it comes with more options for filtering and ordering
                        levels.
                    </p>
                </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-6 pb-2">
                <div>
                    <h1 className="font-bold text-2xl">
                        1. Difficulty Ranking
                    </h1>
                    <p>
                        Difficulty is ranked on a scale between 1 and 35. These
                        are some reference demons:
                    </p>
                </div>
                <ScrollArea
                    type="always"
                    className="whitespace-nowrap sm:w-full lg:w-11/12 h-[30rem]"
                >
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={EasyDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Easy Demon</p>
                            </div>

                            <DemonDifficultyReference
                                Tier={1}
                                Title={"The Nightmare"}
                            />
                            <DemonDifficultyReference
                                Tier={2}
                                Title={"Speed Racer"}
                            />
                            <DemonDifficultyReference
                                Tier={3}
                                Title={"Clubstep"}
                            />
                            <DemonDifficultyReference
                                Tier={4}
                                Title={"Death Moon"}
                            />
                            <DemonDifficultyReference
                                Tier={5}
                                Title={"Deadlocked"}
                            />
                        </div>
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={MediumDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Medium Demon</p>
                            </div>

                            <DemonDifficultyReference Tier={6} Title={"B"} />
                            <DemonDifficultyReference
                                Tier={7}
                                Title={"VeritY"}
                            />
                            <DemonDifficultyReference
                                Tier={8}
                                Title={"Nitrogen"}
                            />
                            <DemonDifficultyReference
                                Tier={9}
                                Title={"Lava Temple"}
                            />
                            <DemonDifficultyReference
                                Tier={10}
                                Title={"Judgement"}
                            />
                        </div>
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={HardDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Hard Demon</p>
                            </div>

                            <DemonDifficultyReference
                                Tier={11}
                                Title={"Nine Circles"}
                            />
                            <DemonDifficultyReference
                                Tier={12}
                                Title={"ThermoDynamix"}
                            />
                            <DemonDifficultyReference
                                Tier={13}
                                Title={"Future Funk"}
                            />
                            <DemonDifficultyReference
                                Tier={14}
                                Title={"CraZy"}
                            />
                            <DemonDifficultyReference
                                Tier={15}
                                Title={"Psychosis"}
                            />
                        </div>
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={InsaneDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Insane Demon</p>
                            </div>

                            <DemonDifficultyReference
                                Tier={16}
                                Title={"Windy Landscape"}
                            />
                            <DemonDifficultyReference
                                Tier={17}
                                Title={"Firewall"}
                            />
                            <DemonDifficultyReference
                                Tier={18}
                                Title={"Ultrasonic"}
                            />
                            <DemonDifficultyReference
                                Tier={19}
                                Title={"Leyak"}
                            />
                            <DemonDifficultyReference
                                Tier={20}
                                Title={"Thanatophobia"}
                            />
                        </div>
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={ExtremeDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Extreme Demon (Low)</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <DemonDifficultyReference
                                    Tier={21}
                                    Title={"Acu"}
                                />
                                <DemonDifficultyReference
                                    Tier={22}
                                    Title={"Deception Dive"}
                                />
                                <DemonDifficultyReference
                                    Tier={23}
                                    Title={"Daydream"}
                                />
                                <DemonDifficultyReference
                                    Tier={24}
                                    Title={"Bloodbath"}
                                />
                                <DemonDifficultyReference
                                    Tier={25}
                                    Title={"Sakupen Hell"}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={ExtremeDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Extreme Demon (Mid)</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <DemonDifficultyReference
                                    Tier={26}
                                    Title={"Athanatos"}
                                />
                                <DemonDifficultyReference
                                    Tier={27}
                                    Title={"Distraught"}
                                />
                                <DemonDifficultyReference
                                    Tier={28}
                                    Title={"Artifical Ascent"}
                                />
                                <DemonDifficultyReference
                                    Tier={29}
                                    Title={"Digital Descent"}
                                />
                                <DemonDifficultyReference
                                    Tier={30}
                                    Title={"Sonic Wave"}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <div className="pl-1 flex gap-2 items-center">
                                <img
                                    src={ExtremeDemonIcon}
                                    className="w-6.5 h-6"
                                ></img>
                                <p className="text-2xl">Extreme Demon (High)</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <DemonDifficultyReference
                                    Tier={31}
                                    Title={"Yatagarasu"}
                                />
                                <DemonDifficultyReference
                                    Tier={32}
                                    Title={"Nhelv"}
                                />
                                <DemonDifficultyReference
                                    Tier={33}
                                    Title={"Zodiac"}
                                />
                                <DemonDifficultyReference
                                    Tier={34}
                                    Title={"The Golden"}
                                />
                                <DemonDifficultyReference
                                    Tier={35}
                                    Title={"Slaughterhouse"}
                                />
                            </div>
                        </div>
                    </div>

                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </div>

            <div>
                <div>
                    <h1 className="font-bold text-2xl">2. Enjoyment Ranking</h1>
                    <p>Enjoyment is ranked 'out of 10'.</p>
                </div>
                <div className="pt-5 pb-5 flex flex-col gap-10">
                    <ScrollArea
                        type="always"
                        className="whitespace-nowrap sm:w-full lg:w-11/12 h-[30rem]"
                    >
                        <div className="flex flex-col gap-5 rounded-lg border p-4">
                            <DemonEnjoymentReference Tier={0} />
                            <DemonEnjoymentReference Tier={1} />
                            <DemonEnjoymentReference Tier={2} />
                            <DemonEnjoymentReference Tier={3} />
                            <DemonEnjoymentReference Tier={4} />
                            <DemonEnjoymentReference Tier={5} />
                            <DemonEnjoymentReference Tier={6} />
                            <DemonEnjoymentReference Tier={7} />
                            <DemonEnjoymentReference Tier={8} />
                            <DemonEnjoymentReference Tier={9} />
                            <DemonEnjoymentReference Tier={10} />
                        </div>

                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="font-bold text-2xl">3. Other Features</h1>
                    <p>
                        If you want to do something like the demon alphabet{" "}
                        <a href="https://www.youtube.com/watch?v=0TV8Umc8gHc&list=PLGfqDU1YB9VGuPu7BD8Fuv0oGqWHoIBoV">
                            <u>(AeonAir's Example)</u>
                        </a>
                        , this project also has a built-in level randomizer. Or,
                        if you prefer, you can copy the data and paste it into
                        another website.
                    </p>
                </div>
            </div>
            <Separator />
            <div className="flex flex-col pb-5 gap-2">
                <h1 className="font-bold text-2xl">Conclusion</h1>
                <p>Putting it all together, you get this:</p>
                <div className="sm:w-full lg:w-7/12">
                    <DemonCard demon={TestDemon} />
                </div>
                <p>Now you should be ready to..</p>
                <Button onClick={switchToBrowse} className="h-12 w-48 gap-2">
                    <SearchIcon />
                    Jump In!
                </Button>
            </div>
        </div>
    );
}
