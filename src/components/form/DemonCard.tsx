import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

import Conversion from "@/data/Conversion.json";

// Import: Images
import { Circle as CircleIcon } from "lucide-react";

import OfficialDemonIcon from "/assets/OfficialDemon.png";
import EasyDemonIcon from "/assets/EasyDemon.png";
import MediumDemonIcon from "/assets/MediumDemon.png";
import HardDemonIcon from "/assets/HardDemon.png";
import InsaneDemonIcon from "/assets/InsaneDemon.png";
import ExtremeDemonIcon from "/assets/ExtremeDemon.png";

const RatedDifficultyToImage = [
    OfficialDemonIcon,
    EasyDemonIcon,
    MediumDemonIcon,
    HardDemonIcon,
    InsaneDemonIcon,
    ExtremeDemonIcon,
];

// Interface
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

interface Props {
    demon: Demon;
}

function LevelIDToVersion(LevelID: number) {
    if (LevelID < 4) {
        if (LevelID == 1) {
            return "1.6";
        } else if (LevelID == 2) {
            return "1.9";
        } else {
            return "2.0";
        }
    } else if (LevelID < 1942) {
        return "1.0";
    } else if (LevelID < 10044) {
        return "1.1";
    } else if (LevelID < 63416) {
        return "1.2";
    } else if (LevelID < 121069) {
        return "1.3";
    } else if (LevelID < 184426) {
        return "1.4";
    } else if (LevelID < 420781) {
        return "1.5";
    } else if (LevelID < 835854) {
        return "1.6";
    } else if (LevelID < 1629780) {
        return "1.7";
    } else if (LevelID < 2814868) {
        return "1.8";
    } else if (LevelID < 11127666) {
        return "1.9";
    } else if (LevelID < 28000000) {
        return "2.0";
    } else if (LevelID < 32466666) {
        return "Early-2.1";
    } else if (LevelID < 64933332) {
        return "Mid-2.1";
    } else if (LevelID < 97400000) {
        return "Late-2.1";
    } else if (LevelID >= 97400000) {
        return "2.2";
    }
}

export default function DemonCard(props: Props) {
    const demon = props.demon;
    const { toast } = useToast();

    const onIdClick = () => {
        navigator.clipboard.writeText(demon.LevelId.toString());
        toast({
            title: "Copied!",
            description: "Level Id was copied to your clipboard.",
        });
    };

    return (
        <TooltipProvider delayDuration={100}>
            <Card>
                <CardHeader>
                    <div className="flex gap-3">
                        {demon.Title.length > 17 ? (
                            <CardTitle className="text-md">
                                {demon.Title}
                            </CardTitle>
                        ) : (
                            <CardTitle>{demon.Title}</CardTitle>
                        )}

                        <Tooltip>
                            <TooltipTrigger>
                                <img
                                    className="mt-0.5 h-6 w-6.5"
                                    src={
                                        RatedDifficultyToImage[
                                            demon.RatedDifficulty
                                        ]
                                    }
                                ></img>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>
                                    <b>Official Difficulty</b>
                                </p>
                                <p>
                                    {
                                        Conversion.RatedDifficultyToString[
                                            demon.RatedDifficulty
                                        ]
                                    }
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <CardDescription>
                        {!demon.Creator ? "(Unregistered)" : demon.Creator}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2">
                    <div className="flex items-center gap-2 w-6/12">
                        <Tooltip>
                            <TooltipTrigger>
                                {demon.Difficulty == null ? (
                                    <Badge
                                        variant="partial"
                                        className="flex py-1 gap-1 items-center justify-center"
                                    >
                                        /
                                    </Badge>
                                ) : (
                                    <Badge
                                        variant={
                                            demon.DifficultyRatings >= 5
                                                ? "outline"
                                                : "partial"
                                        }
                                        className="flex py-1 gap-1 items-center justify-center"
                                    >
                                        <CircleIcon
                                            fill={
                                                Conversion.DifficultyToHex[
                                                    Math.floor(
                                                        demon.Difficulty
                                                    ) - 1
                                                ]
                                            }
                                            strokeWidth={3}
                                            className="w-3.5 h-3.5"
                                        ></CircleIcon>
                                        D{demon.Difficulty}
                                    </Badge>
                                )}
                            </TooltipTrigger>
                            <TooltipContent
                                className="flex flex-col gap-1"
                                side="bottom"
                            >
                                <div>
                                    <p>
                                        <b>Community Difficulty</b>
                                    </p>
                                    <p>
                                        {demon.Difficulty
                                            ? Conversion.DifficultyTierToString[
                                                  Math.round(
                                                      demon.Difficulty - 1
                                                  )
                                              ]
                                            : "Unrated"}
                                    </p>
                                </div>

                                {demon.Difficulty == null ? null : (
                                    <>
                                        <Separator />
                                        <p>
                                            <b>
                                                {demon.DifficultyRatings + " "}
                                            </b>
                                            {demon.DifficultyRatings == 1
                                                ? "Rating"
                                                : "Ratings"}
                                        </p>
                                    </>
                                )}
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                {demon.Enjoyment == null ? (
                                    <Badge
                                        variant="partial"
                                        className="flex py-1 gap-1 items-center justify-center"
                                    >
                                        /
                                    </Badge>
                                ) : (
                                    <Badge
                                        variant={
                                            demon.EnjoymentRatings >= 5
                                                ? "outline"
                                                : "partial"
                                        }
                                        className="flex py-1 gap-1 items-center justify-center"
                                    >
                                        <CircleIcon
                                            fill={
                                                Conversion.EnjoymentToHex[
                                                    Math.floor(demon.Enjoyment)
                                                ]
                                            }
                                            strokeWidth={3}
                                            className="w-3.5 h-3.5"
                                        ></CircleIcon>
                                        E{demon.Enjoyment}
                                    </Badge>
                                )}
                            </TooltipTrigger>
                            <TooltipContent
                                className="flex flex-col gap-1"
                                side="bottom"
                            >
                                <div>
                                    <p>
                                        <b>Community Enjoyment</b>
                                    </p>
                                    <p>
                                        {demon.Enjoyment
                                            ? Conversion.EnjoymentTierToString[
                                                  Math.round(
                                                      demon.Enjoyment - 1
                                                  )
                                              ]
                                            : "Unrated"}
                                    </p>
                                </div>

                                {demon.Enjoyment == null ? null : (
                                    <>
                                        <Separator />
                                        <p>
                                            <b>
                                                {demon.EnjoymentRatings + " "}
                                            </b>
                                            {demon.EnjoymentRatings == 1
                                                ? "Rating"
                                                : "Ratings"}
                                        </p>
                                    </>
                                )}
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div className="flex items-center justify-end w-6/12">
                        <Tooltip>
                            <TooltipTrigger>
                                <p
                                    onClick={onIdClick}
                                    className="cursor-pointer"
                                >
                                    #{demon.LevelId}
                                </p>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>
                                    <b>Release Version</b>
                                </p>
                                <p>{LevelIDToVersion(demon.LevelId)}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </CardFooter>
            </Card>
        </TooltipProvider>
    );
}
