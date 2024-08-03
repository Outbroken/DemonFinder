import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import DemonCard from "@/components/form/DemonCard";

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
    list: any;
}

import { Dices as DicesIcon } from "lucide-react";

export default function RandomizerMenu(props: Props) {
    const [generatedDemon, setGeneratedDemon] = useState<Demon>();

    const handleRandomizerGenerate = () => {
        setGeneratedDemon(
            props.list[Math.floor(Math.random() * props.list.length)]
        );
    };

    return (
        <DialogContent aria-describedby={undefined}>
            <DialogHeader>
                <DialogTitle>Randomizer</DialogTitle>
            </DialogHeader>
            <Separator />

            <div>
                {generatedDemon ? (
                    <DemonCard demon={generatedDemon}></DemonCard>
                ) : (
                    <p>
                        Levels are generated based on your search filters. Click
                        the button to get started.
                    </p>
                )}
            </div>

            <Button onClick={handleRandomizerGenerate}>
                <DicesIcon className="mr-2 h-4 w-4" /> {""}
                Generate
            </Button>
        </DialogContent>
    );
}
