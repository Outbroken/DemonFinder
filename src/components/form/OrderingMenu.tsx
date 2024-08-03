import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import {
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Check as CheckIcon } from "lucide-react";
import { RotateCw as RestartIcon } from "lucide-react";

interface OrderingData {
    OrderingType: String;
    Reverse: boolean;
}

interface Props {
    onOrderingChanged: (OrderingData: any) => void;
}

export default function OrderingMenu(props: Props) {
    const [orderingType, setOrderingType] = useState("");
    const [reverseOrdering, setReverseOrdering] = useState(false);
    const [reverseOrderingActive, setReverseOrderingActivity] = useState(false);

    const handleOrderingTypeChange = (value: string) => {
        if (value == "none") {
            setOrderingType("");
            setReverseOrdering(false);
            setReverseOrderingActivity(false);

            return;
        }

        setReverseOrderingActivity(true);
        setOrderingType(value);
    };

    const handleReverseOrderingChange = (checked: boolean) => {
        setReverseOrdering(checked);
    };

    const handleOrderingMenuSubmit = () => {
        props.onOrderingChanged({
            OrderingType: orderingType,
            Reverse: reverseOrdering,
        } as OrderingData);
    };

    const handleOrderingMenuReset = () => {
        setOrderingType("");
        setReverseOrdering(false);

        props.onOrderingChanged({});
    };

    return (
        <DialogContent aria-describedby={undefined}>
            <DialogHeader>
                <DialogTitle>Order</DialogTitle>
            </DialogHeader>
            <Separator />

            <Select
                onValueChange={handleOrderingTypeChange}
                value={orderingType}
            >
                <SelectTrigger>
                    <SelectValue placeholder="(none)" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="none">(none)</SelectItem>
                    <SelectItem value="Name">Name: A-Z</SelectItem>
                    <SelectItem value="Creator">Creator: A-Z</SelectItem>
                    <SelectItem value="Difficulty">
                        Difficulty: Easy-Hard
                    </SelectItem>
                    <SelectItem value="Enjoyment">
                        Enjoyment: Best-Worst
                    </SelectItem>
                    <SelectItem value="Id">Creation: Oldest-Newest</SelectItem>
                </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
                {reverseOrderingActive == true ? (
                    <Checkbox
                        onCheckedChange={handleReverseOrderingChange}
                        checked={reverseOrdering}
                    />
                ) : (
                    <Checkbox disabled />
                )}

                <p className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Reverse
                </p>
            </div>

            <Separator />

            <div className="flex items-center gap-2 w-full">
                <DialogClose className="grow" asChild>
                    <Button onClick={handleOrderingMenuSubmit}>
                        <CheckIcon className="mr-2 h-4 w-4" /> {""}
                        Apply
                    </Button>
                </DialogClose>
                <Button onClick={handleOrderingMenuReset} className="grow">
                    <RestartIcon className="mr-2 h-4 w-4" /> {""}
                    Reset
                </Button>
            </div>
        </DialogContent>
    );
}
