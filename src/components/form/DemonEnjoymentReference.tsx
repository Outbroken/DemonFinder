import Conversion from "@/data/Conversion.json";

// Import: Images
import { Circle as CircleIcon } from "lucide-react";

// Interface
interface Props {
    Tier: number;
}

export default function DemonEnjoymentReference(props: Props) {
    return (
        <div className="flex gap-2 items-center">
            <CircleIcon
                fill={Conversion.EnjoymentToHex[props.Tier]}
                strokeWidth={3}
                className="w-10 h-10"
            ></CircleIcon>

            <div>
                <p className="text-2xl">
                    <b>E{props.Tier}</b>
                </p>
                <p>{Conversion.EnjoymentTierToString[props.Tier]}</p>
            </div>
        </div>
    );
}
