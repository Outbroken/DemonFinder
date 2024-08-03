// Import: Core
import { useState, useRef } from "react";

// Import: Form Components
import CardDisplay from "@/components/form/CardDisplay";
import TopBar from "@/components/form/TopBar";
import BottomBar from "@/components/form/BottomBar";

// Import: Files
import DemonList from "@/data/Demons.json";

// Interfaces
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

// Read only functions
const filterDemonByQuery = (demon: Demon, query: string) => {
    if (demon.Title.toLowerCase().includes(query)) {
        return true;
    }

    if (demon.Creator && demon.Creator.toLowerCase().includes(query)) {
        return true;
    }

    if (demon.LevelId.toString().includes(query)) {
        return true;
    }

    return false;
};

const filterDemonByDifficulty = (demon: Demon, filter: any) => {
    if (!demon.Difficulty) {
        if (filter.DifficultyMin || filter.DifficultyMax) {
            return false;
        } else {
            return true;
        }
    }

    if (
        (!filter.DifficultyMin || demon.Difficulty >= filter.DifficultyMin) &&
        (!filter.DifficultyMax || demon.Difficulty <= filter.DifficultyMax)
    ) {
        return true;
    }

    return false;
};

const filterDemonByEnjoyment = (demon: Demon, filter: any) => {
    if (!demon.Enjoyment) {
        if (filter.EnjoymentMin || filter.EnjoymentMax) {
            return false;
        } else {
            return true;
        }
    }

    if (
        (!filter.EnjoymentMin || demon.Enjoyment >= filter.EnjoymentMin) &&
        (!filter.EnjoymentMax || demon.Enjoyment <= filter.EnjoymentMax)
    ) {
        return true;
    }

    return false;
};

const filterDemonByPrefix = (demon: Demon, filter: any) => {
    if (!filter.PrefixValue) {
        return true;
    }

    if (!filter.PrefixType || filter.PrefixType == "") {
        if (
            demon.Title.substring(0, filter.PrefixValue.length).toLowerCase() ==
            filter.PrefixValue
        ) {
            return true;
        }

        if (
            demon.Creator.substring(
                0,
                filter.PrefixValue.length
            ).toLowerCase() == filter.PrefixValue
        ) {
            return true;
        }

        if (
            demon.LevelId.toString().substring(0, filter.PrefixValue.length) ==
            filter.PrefixValue
        ) {
            return true;
        }
    } else if (filter.PrefixType == "name") {
        if (
            demon.Title.substring(0, filter.PrefixValue.length).toLowerCase() ==
            filter.PrefixValue
        ) {
            return true;
        }
    } else if (filter.PrefixType == "creator" && demon.Creator) {
        if (
            demon.Creator.substring(
                0,
                filter.PrefixValue.length
            ).toLowerCase() == filter.PrefixValue
        ) {
            return true;
        }
    } else if (filter.PrefixType == "id") {
        if (
            demon.LevelId.toString().substring(0, filter.PrefixValue.length) ==
            filter.PrefixValue
        ) {
            return true;
        }
    }

    return false;
};

const filterDemonBySuffix = (demon: Demon, filter: any) => {
    if (!filter.SuffixValue) {
        return true;
    }

    if (!filter.SuffixType || filter.SuffixType == "") {
        if (
            demon.Title.substring(
                demon.Title.length - filter.SuffixValue.length,
                demon.Title.length
            ).toLowerCase() == filter.SuffixValue
        ) {
            return true;
        }

        if (
            demon.Creator &&
            demon.Creator.substring(
                demon.Creator.length - filter.SuffixValue.length,
                demon.Creator.length
            ).toLowerCase() == filter.SuffixValue
        ) {
            return true;
        }

        if (
            demon.LevelId.toString().substring(
                demon.LevelId.toString().length - filter.SuffixValue.length,
                demon.LevelId.toString().length
            ) == filter.SuffixValue
        ) {
            return true;
        }
    } else if (filter.SuffixType == "name") {
        if (
            demon.Title.substring(
                demon.Title.length - filter.SuffixValue.length,
                demon.Title.length
            ).toLowerCase() == filter.SuffixValue
        ) {
            return true;
        }
    } else if (filter.SuffixType == "creator") {
        if (
            demon.Creator &&
            demon.Creator.substring(
                demon.Creator.length - filter.SuffixValue.length,
                demon.Creator.length
            ).toLowerCase() == filter.SuffixValue
        ) {
            return true;
        }
    } else if (filter.SuffixType == "id") {
        if (
            demon.LevelId.toString().substring(
                demon.LevelId.toString().length - filter.SuffixValue.length,
                demon.LevelId.toString().length
            ) == filter.SuffixValue
        ) {
            return true;
        }
    }

    return false;
};

const filterDemonByOfficial = (demon: Demon, ratedDifficultySelection: any) => {
    if (
        !ratedDifficultySelection ||
        demon.RatedDifficulty == 0 ||
        ratedDifficultySelection.includes(demon.RatedDifficulty)
    ) {
        return true;
    }

    return false;
};

const orderDemons = (list: any, orderData: any) => {
    if (
        !orderData ||
        !orderData.OrderingType ||
        orderData.OrderingType == "none"
    ) {
        return list;
    }

    if (orderData.Reverse == false) {
        if (orderData.OrderingType == "Name") {
            return list.sort((a: Demon, b: Demon) =>
                a.Title.localeCompare(b.Title)
            );
        } else if (orderData.OrderingType == "Creator") {
            return list.sort((a: Demon, b: Demon) =>
                a.Creator
                    ? a.Creator.localeCompare(b.Creator ? b.Creator : "/")
                    : 0
            );
        } else if (orderData.OrderingType == "Difficulty") {
            return list.sort((a: Demon, b: Demon) =>
                a.Difficulty
                    ? a.Difficulty - (b.Difficulty ? b.Difficulty : 999)
                    : 999
            );
        } else if (orderData.OrderingType == "Enjoyment") {
            return list.sort((a: Demon, b: Demon) =>
                b.Enjoyment
                    ? b.Enjoyment - (a.Enjoyment ? a.Enjoyment : -1)
                    : -1
            );
        } else if (orderData.OrderingType == "Id") {
            return list.sort((a: Demon, b: Demon) => a.LevelId - b.LevelId);
        }
    } else {
        if (orderData.OrderingType == "Name") {
            return list.sort((a: Demon, b: Demon) =>
                b.Title.localeCompare(a.Title)
            );
        } else if (orderData.OrderingType == "Creator") {
            return list.sort((a: Demon, b: Demon) =>
                b.Creator
                    ? b.Creator.localeCompare(a.Creator ? a.Creator : "/")
                    : 0
            );
        } else if (orderData.OrderingType == "Difficulty") {
            return list.sort((a: Demon, b: Demon) =>
                b.Difficulty
                    ? b.Difficulty - (a.Difficulty ? a.Difficulty : -1)
                    : -1
            );
        } else if (orderData.OrderingType == "Enjoyment") {
            return list.sort((a: Demon, b: Demon) =>
                a.Enjoyment
                    ? a.Enjoyment - (b.Enjoyment ? b.Enjoyment : 999)
                    : 999
            );
        } else if (orderData.OrderingType == "Id") {
            return list.sort((a: Demon, b: Demon) => b.LevelId - a.LevelId);
        }
    }
};

// IDEA2 (difficult): Add a property to levels where it shows the amount of people who rated it

// Constants
const CardsPerPage = 49;

export default function BrowseContent() {
    // State
    const filterData = useRef({});
    const orderData = useRef({});
    const searchQuery = useRef("");
    const [pageNumber, setPageNumber] = useState(0);

    const [filteredDemons, setFilteredDemons] = useState<Demon[]>(DemonList);

    // Functions: Card Display
    const filterDemons = () => {
        let newList: any[] = [];
        let ratedDifficultySelection = null;

        if ((filterData.current as any).RatedDifficultySelection) {
            ratedDifficultySelection = (
                filterData.current as any
            ).RatedDifficultySelection.map(function (str: string) {
                return Number(str);
            });
        }

        let query = searchQuery.current.toLowerCase();

        if (Object.entries(filterData).length === 0) {
            for (let index = 0; index < DemonList.length; index++) {
                let demon = DemonList[index];

                // Step 1: Filter by query
                if (
                    searchQuery.current != "" &&
                    filterDemonByQuery(demon, query) == false
                ) {
                    continue;
                }
            }
        } else {
            for (let index = 0; index < DemonList.length; index++) {
                let demon = DemonList[index];

                // Step 1: Filter by query
                if (
                    searchQuery.current != "" &&
                    filterDemonByQuery(demon, query) == false
                ) {
                    continue;
                }

                // Step 2: Filter by Community
                if (
                    filterDemonByDifficulty(demon, filterData.current) == false
                ) {
                    continue;
                }

                if (
                    filterDemonByEnjoyment(demon, filterData.current) == false
                ) {
                    continue;
                }

                // Step 3: Filter by Parsing
                if (filterDemonByPrefix(demon, filterData.current) == false) {
                    continue;
                }

                if (filterDemonBySuffix(demon, filterData.current) == false) {
                    continue;
                }

                // Step 4: Filter by Official Difficulty
                if (
                    filterDemonByOfficial(demon, ratedDifficultySelection) ==
                    false
                ) {
                    continue;
                }

                // Add it to the list
                newList[newList.length] = demon;
            }
        }

        // Order the list
        newList = orderDemons(newList, orderData.current);
        setFilteredDemons(newList as Demon[]);

        // Stop some confusion
        setPageNumber(0);
        window.scrollTo(0, 0);
    };

    const handleSearchFieldSubmit = (query: string) => {
        searchQuery.current = query;
        filterDemons();
    };

    const handleFilterChange = (data: any) => {
        filterData.current = data;
        filterDemons();
    };

    const handleOrderChange = (data: any) => {
        orderData.current = data;
        filterDemons();
    };

    const handlePageChange = (change: number) => {
        if (change == 0) {
            setPageNumber(0);
        } else if (change == 1) {
            if (pageNumber - 1 > -1) {
                setPageNumber(pageNumber - 1);
            }
        } else if (change == 2) {
            if (pageNumber + 1 < filteredDemons.length / CardsPerPage) {
                setPageNumber(pageNumber + 1);
            }
        } else if (change == 3) {
            setPageNumber(Math.floor(filteredDemons.length / CardsPerPage));
        }

        window.scrollTo(0, 0);
    };

    // Export
    return (
        <div className="">
            <TopBar
                onSearchFieldSubmit={handleSearchFieldSubmit}
                onFilterChanged={handleFilterChange}
            />
            <CardDisplay
                List={filteredDemons.slice(
                    pageNumber * CardsPerPage,
                    (pageNumber + 1) * CardsPerPage - 1
                )}
            />
            <BottomBar
                onOrderChanged={handleOrderChange}
                onPageUpdate={handlePageChange}
                paginationPreviousValue={pageNumber == 0 ? -1 : pageNumber}
                paginationCurrentValue={pageNumber + 1}
                paginationNextValue={
                    pageNumber > filteredDemons.length / CardsPerPage - 1
                        ? -1
                        : pageNumber
                }
                filteredList={filteredDemons}
            ></BottomBar>
        </div>
    );
}
