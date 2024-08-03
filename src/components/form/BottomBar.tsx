import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import OrderingMenu from "@/components/form/OrderingMenu";
import Pagination from "@/components/form/Pagination";
import Randomizer from "@/components/form/RandomizerMenu";
import ExportMenu from "@/components/form/ExportMenu";

import { ArrowDownUp as ArrowDownUpIcon } from "lucide-react";
import { Dices as DicesIcon } from "lucide-react";
import { Ellipsis as EllipsisIcon } from "lucide-react";
import { ArrowRightFromLine as ArrowRightFromLineIcon } from "lucide-react";

interface Props {
    onOrderChanged: (data: any) => void;
    onPageUpdate: (change: number) => void;
    paginationPreviousValue: number;
    paginationCurrentValue: number;
    paginationNextValue: number;
    filteredList: any;
}

export default function BottomBar(props: Props) {
    const [orderButtonActive, setOrderButtonActivity] =
        useState<boolean>(false);

    const handleOrderChanged = (data: any) => {
        if (!data.OrderingType && !data.Reverse) {
            setOrderButtonActivity(false);
        } else {
            setOrderButtonActivity(true);
        }

        props.onOrderChanged(data);
    };

    return (
        <div className="sticky backdrop-blur-sm w-full p-5 bottom-0">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-start grow">
                    <Dialog>
                        <DialogTrigger>
                            <Button
                                className="w-10"
                                size="icon"
                                variant={
                                    orderButtonActive == true
                                        ? "default"
                                        : "outline"
                                }
                            >
                                <ArrowDownUpIcon className="h-4 w-4" />
                            </Button>
                        </DialogTrigger>
                        <OrderingMenu
                            onOrderingChanged={handleOrderChanged}
                        ></OrderingMenu>
                    </Dialog>
                </div>

                <div className="flex items-center justify-center grow gap-2">
                    <Pagination
                        onPageUpdate={props.onPageUpdate}
                        previousValue={props.paginationPreviousValue}
                        currentValue={props.paginationCurrentValue}
                        nextValue={props.paginationNextValue}
                    ></Pagination>
                </div>

                <div className="flex items-center justify-end grow gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="outline" size="icon">
                                <EllipsisIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mx-0">
                            <div className="flex gap-2 items-center justify-center">
                                <Dialog>
                                    <DialogTrigger>
                                        <Button
                                            className="w-10"
                                            size="icon"
                                            variant="outline"
                                        >
                                            <DicesIcon className="h-4 w-4" />
                                        </Button>
                                    </DialogTrigger>

                                    <Randomizer
                                        list={props.filteredList}
                                    ></Randomizer>
                                </Dialog>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button variant="outline" size="icon">
                                            <ArrowRightFromLineIcon className="h-4 w-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <ExportMenu
                                        list={props.filteredList}
                                    ></ExportMenu>
                                </Dialog>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}
