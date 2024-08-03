import Conversion from "@/data/Conversion.json";

// Import: Images
import { Circle as CircleIcon } from "lucide-react";

// Interface
interface Props {
    Tier: number;
    Title: string;
}

export default function DemonDifficultyReference(props: Props) {
    return (
        <div className="flex gap-2 items-center">
            <CircleIcon
                fill={Conversion.DifficultyToHex[props.Tier - 1]}
                strokeWidth={3}
                className="w-10 h-10"
            ></CircleIcon>

            <div>
                <p className="text-2xl">D{props.Tier}</p>
                <p>{props.Title}</p>
            </div>
        </div>
    );
}
