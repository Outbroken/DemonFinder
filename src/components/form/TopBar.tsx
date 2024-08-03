import SearchBar from "@/components/form/SearchBar";

interface Props {
    onSearchFieldSubmit: (query: string) => void;
    onFilterChanged: (data: any) => void;
}

export default function TopBar(props: Props) {
    return (
        <div className="z-20 fixed backdrop-blur-sm pt-0 p-5 w-full">
            <div className="flex items-center justify-start">
                <SearchBar
                    onSearchFieldSubmit={props.onSearchFieldSubmit}
                    onFilterChanged={props.onFilterChanged}
                />
            </div>
        </div>
    );
}
