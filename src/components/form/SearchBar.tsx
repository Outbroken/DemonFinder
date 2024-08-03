import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Search as SearchIcon } from "lucide-react";
import { Filter as FilterIcon } from "lucide-react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FilterMenu from "@/components/form/FilterMenu";

interface Props {
    onSearchFieldSubmit: (query: string) => void;
    onFilterChanged: (data: any) => void;
}

export default function SearchBar(props: Props) {
    var searchQuery = "";
    const [filterButtonActive, setFilterButtonActivity] =
        useState<boolean>(false);

    const handleSearchChange = (event: any) => {
        searchQuery = event.target.value;
    };

    const handleSearchSubmit = (event: any) => {
        event.preventDefault();
        props.onSearchFieldSubmit(searchQuery);
    };

    const handleSearchEnter = (event: any) => {
        if (event.keyCode != 13) {
            return;
        }

        event.preventDefault();
        props.onSearchFieldSubmit(searchQuery);
    };

    const handleFilterChanged = (data: any) => {
        if (Object.entries(data).length === 0) {
            setFilterButtonActivity(false);
        } else {
            setFilterButtonActivity(true);
        }

        if (!data.RatedDifficultySelection) {
            data.RatedDifficultySelection = ["1", "2", "3", "4", "5"];
        }

        props.onFilterChanged(data);
    };

    return (
        <div className="flex w-full sm:max-w-lg lg:max-w-xl items-center gap-2">
            <Dialog>
                <Input
                    id="searchQuery"
                    name="searchQuery"
                    placeholder="Search Demons"
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchEnter}
                />
                <Button
                    className="w-12"
                    type="submit"
                    size="icon"
                    onClick={handleSearchSubmit}
                >
                    <SearchIcon className="h-4 w-4" />
                </Button>
                <DialogTrigger>
                    <Button
                        className="w-10"
                        size="icon"
                        variant={
                            filterButtonActive == true ? "default" : "outline"
                        }
                    >
                        <FilterIcon className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <FilterMenu onFilterChanged={handleFilterChanged} />
            </Dialog>
        </div>
    );
}
/*

*/
