import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
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

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import EasyDemonIcon from "/assets/EasyDemon.png";
import MediumDemonIcon from "/assets/MediumDemon.png";
import HardDemonIcon from "/assets/HardDemon.png";
import InsaneDemonIcon from "/assets/InsaneDemon.png";
import ExtremeDemonIcon from "/assets/ExtremeDemon.png";

import { Check as CheckIcon } from "lucide-react";
import { RotateCw as RestartIcon } from "lucide-react";

interface FilterData {
    DifficultyMin: number;
    DifficultyMax: number;
    EnjoymentMin: number;
    EnjoymentMax: number;
    PrefixType: string;
    PrefixValue: string;
    SuffixType: string;
    SuffixValue: string;
    RatedDifficultySelection: Array<string>;
}

interface Props {
    onFilterChanged: (filterData: any) => void;
}

export default function FilterMenu(props: Props) {
    const [difficultyMinField, setDifficultyMinField] = useState("");
    const [difficultyMaxField, setDifficultyMaxField] = useState("");
    const [enjoymentMinField, setEnjoymentMinField] = useState("");
    const [enjoymentMaxField, setEnjoymentMaxField] = useState("");

    const [prefixTypeValue, setPrefixTypeField] = useState("");
    const [prefixValueField, setPrefixValueField] = useState("");
    const [suffixTypeValue, setSuffixTypeField] = useState("");
    const [suffixValueField, setSuffixValueField] = useState("");

    const [ratedDifficultySelection, setRatedDifficultySelection] = useState<
        string[]
    >(["1", "2", "3", "4", "5"]);

    const handleDifficultyMinChange = (event: any) => {
        let newValue = Number(event.target.value);

        if (event.target.value == "") {
            setDifficultyMinField("");
            return;
        }

        if (isNaN(newValue)) {
            setDifficultyMinField(difficultyMinField);
            return;
        }

        if (newValue < 1 || newValue > 35) {
            setDifficultyMinField(
                Math.min(Math.max(newValue, 1), 35).toString()
            );
            return;
        }

        setDifficultyMinField(event.target.value);
    };

    const handleDifficultyMaxChange = (event: any) => {
        let newValue = Number(event.target.value);

        if (event.target.value == "") {
            setDifficultyMaxField("");
            return;
        }

        if (isNaN(newValue)) {
            setDifficultyMaxField(difficultyMaxField);
            return;
        }

        if (newValue < Number(difficultyMinField) || newValue > 35) {
            setDifficultyMaxField(
                Math.min(Math.max(newValue, 1), 35).toString()
            );
            return;
        }

        setDifficultyMaxField(event.target.value);
    };

    const handleEnjoymentMinChange = (event: any) => {
        let newValue = Number(event.target.value);

        if (event.target.value == "") {
            setEnjoymentMinField("");
            return;
        }

        if (isNaN(newValue)) {
            setEnjoymentMinField(enjoymentMinField);
            return;
        }

        if (newValue < 1 || newValue > 10) {
            setEnjoymentMinField(
                Math.min(Math.max(newValue, 1), 10).toString()
            );
            return;
        }

        setEnjoymentMinField(event.target.value);
    };

    const handleEnjoymentMaxChange = (event: any) => {
        let newValue = Number(event.target.value);

        if (event.target.value == "") {
            setEnjoymentMaxField("");
            return;
        }

        if (isNaN(newValue)) {
            setEnjoymentMaxField(enjoymentMaxField);
            return;
        }

        if (newValue < 1 || newValue > 10) {
            setEnjoymentMaxField(
                Math.min(Math.max(newValue, 1), 10).toString()
            );
            return;
        }

        setEnjoymentMaxField(event.target.value);
    };

    const handlePrefixTypeChange = (value: string) => {
        if (value == "any") {
            setPrefixTypeField("");
            return;
        }

        setPrefixTypeField(value);
    };

    const handlePrefixValueChange = (event: any) => {
        setPrefixValueField(event.target.value.toLowerCase());
    };

    const handleSuffixTypeChange = (value: string) => {
        if (value == "any") {
            setSuffixTypeField("");
            return;
        }

        setSuffixTypeField(value);
    };

    const handleSuffixValueChange = (event: any) => {
        setSuffixValueField(event.target.value.toLowerCase());
    };

    const handleRatedDifficultyChange = (value: string[]) => {
        setRatedDifficultySelection(value);
    };

    const handleFilterMenuSubmit = () => {
        let filterReturn: any = {};

        if (difficultyMinField) {
            filterReturn.DifficultyMin = Number(difficultyMinField);
        }

        if (difficultyMaxField) {
            filterReturn.DifficultyMax = Number(difficultyMaxField);
        }

        if (enjoymentMinField) {
            filterReturn.EnjoymentMin = Number(enjoymentMinField);
        }

        if (enjoymentMaxField) {
            filterReturn.EnjoymentMax = Number(enjoymentMaxField);
        }

        if (prefixTypeValue) {
            filterReturn.PrefixType = prefixTypeValue;
        }

        if (prefixValueField) {
            filterReturn.PrefixValue = prefixValueField;
        }

        if (suffixTypeValue) {
            filterReturn.SuffixType = suffixTypeValue;
        }

        if (suffixValueField) {
            filterReturn.SuffixValue = suffixValueField;
        }

        if (ratedDifficultySelection.length != 5) {
            filterReturn.RatedDifficultySelection = ratedDifficultySelection;
        }

        props.onFilterChanged(filterReturn as FilterData);
    };

    const handleFilterMenuReset = () => {
        setDifficultyMinField("");
        setDifficultyMaxField("");
        setEnjoymentMinField("");
        setEnjoymentMaxField("");

        setPrefixTypeField("");
        setPrefixValueField("");
        setSuffixTypeField("");
        setSuffixValueField("");

        setRatedDifficultySelection(["1", "2", "3", "4", "5"]);

        props.onFilterChanged({});
    };

    return (
        <DialogContent className="" aria-describedby={undefined}>
            <DialogHeader>
                <DialogTitle>Filters</DialogTitle>
            </DialogHeader>
            <Separator />

            <div className="grid w-full items-center gap-1.5">
                <Label>Community Difficulty (1-35)</Label>

                <div className="flex gap-2">
                    <Input
                        className="grow"
                        placeholder="Min"
                        value={difficultyMinField}
                        onChange={handleDifficultyMinChange}
                    ></Input>
                    <Input
                        className="grow"
                        placeholder="Max"
                        value={difficultyMaxField}
                        onChange={handleDifficultyMaxChange}
                    ></Input>
                </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label>Community Enjoyment (0-10)</Label>

                <div className="flex gap-2">
                    <Input
                        className="grow"
                        placeholder="Min"
                        value={enjoymentMinField}
                        onChange={handleEnjoymentMinChange}
                    ></Input>
                    <Input
                        className="grow"
                        placeholder="Max"
                        value={enjoymentMaxField}
                        onChange={handleEnjoymentMaxChange}
                    ></Input>
                </div>
            </div>

            <Separator />
            <Label>Parsing</Label>

            <div className="flex items-center gap-2">
                <Select
                    onValueChange={handlePrefixTypeChange}
                    value={prefixTypeValue}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="(Any)" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">(Any)</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="creator">Creator</SelectItem>
                        <SelectItem value="id">Id</SelectItem>
                    </SelectContent>
                </Select>

                <Label>starts with</Label>

                <Input
                    placeholder="..."
                    value={prefixValueField}
                    onChange={handlePrefixValueChange}
                ></Input>
            </div>

            <div className="flex items-center gap-2">
                <Select
                    onValueChange={handleSuffixTypeChange}
                    value={suffixTypeValue}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="(Any)" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="any">(Any)</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="creator">Creator</SelectItem>
                        <SelectItem value="id">Id</SelectItem>
                    </SelectContent>
                </Select>

                <Label>ends with</Label>

                <Input
                    placeholder="..."
                    value={suffixValueField}
                    onChange={handleSuffixValueChange}
                ></Input>
            </div>

            <Separator />

            <Label>Official Difficulty</Label>

            <ToggleGroup
                onValueChange={handleRatedDifficultyChange}
                value={ratedDifficultySelection as string[]}
                type="multiple"
                variant="outline"
                defaultValue={["1", "2", "3", "4", "5"]}
                className="items-center justify-start flex gap-2"
            >
                <ToggleGroupItem value="1">
                    <img className="w-6" src={EasyDemonIcon}></img>
                </ToggleGroupItem>
                <ToggleGroupItem value="2">
                    <img className="w-6" src={MediumDemonIcon}></img>
                </ToggleGroupItem>
                <ToggleGroupItem value="3">
                    <img className="w-6" src={HardDemonIcon}></img>
                </ToggleGroupItem>
                <ToggleGroupItem value="4">
                    <img className="w-6" src={InsaneDemonIcon}></img>
                </ToggleGroupItem>
                <ToggleGroupItem value="5">
                    <img className="w-6" src={ExtremeDemonIcon}></img>
                </ToggleGroupItem>
            </ToggleGroup>

            <Separator />

            <div className="flex items-center gap-2 w-full">
                <DialogClose className="grow" asChild>
                    <Button onClick={handleFilterMenuSubmit}>
                        <CheckIcon className="mr-2 h-4 w-4" /> {""}
                        Apply
                    </Button>
                </DialogClose>
                <Button onClick={handleFilterMenuReset} className="grow">
                    <RestartIcon className="mr-2 h-4 w-4" /> {""}
                    Reset
                </Button>
            </div>
        </DialogContent>
    );
}
