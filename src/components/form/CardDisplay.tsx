import { Label } from "@/components/ui/label";
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
    List: Demon[];
}

export default function CardDisplay(props: Props) {
    return (
        <div className="p-5 pt-16 grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 basis-full gap-8">
            {props.List.length === 0 ? (
                <Label className="pl-1">No results match your search.</Label>
            ) : (
                props.List.map((data) => (
                    <DemonCard key={data.id} demon={data}></DemonCard>
                ))
            )}
        </div>
    );
}
