import { Button } from "@/components/ui/button";

import { ChevronsLeft as ChevronsLeftIcon } from "lucide-react";
import { ChevronsRight as ChevronsRightIcon } from "lucide-react";

interface Props {
    onPageUpdate: (type: number) => void;
    previousValue: number;
    currentValue: number;
    nextValue: number;
}

export default function Pagination(props: Props) {
    return (
        <div className="flex items-center justify-center gap-2 w-full">
            {props.previousValue == -1 ? null : (
                <>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            props.onPageUpdate(0);
                        }}
                    >
                        <ChevronsLeftIcon className="h-6 w-6" />
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            props.onPageUpdate(1);
                        }}
                    >
                        {props.previousValue}
                    </Button>
                </>
            )}

            <Button size="icon" type="submit">
                {props.currentValue}
            </Button>

            {props.nextValue == -1 ? null : (
                <>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            props.onPageUpdate(2);
                        }}
                    >
                        {props.nextValue + 2}
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => {
                            props.onPageUpdate(3);
                        }}
                    >
                        <ChevronsRightIcon className="ml-0.5 h-6 w-6" />
                    </Button>
                </>
            )}
        </div>
    );
}
