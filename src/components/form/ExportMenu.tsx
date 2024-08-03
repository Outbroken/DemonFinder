import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
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

interface Props {
    list: any;
}

import { Clipboard as ClipboardIcon } from "lucide-react";
import { Download as DownloadIcon } from "lucide-react";

export default function ExportMenu(props: Props) {
    const [ExportType, setExportType] = useState("Copy");
    const [ExportParamaters, setExportParamaters] = useState("Title");

    const handleExportTypeChange = (value: string) => {
        setExportType(value);
    };

    const handleExportParamatersChange = (value: string) => {
        setExportParamaters(value);
    };

    const handleExportActivation = () => {
        let ExportValue;

        if (ExportParamaters == "Everything") {
            ExportValue = props.list;
        } else {
            ExportValue = "";

            for (let i = 0; i < props.list.length; i++) {
                ExportValue += props.list[i][ExportParamaters] + "\n";
            }
        }

        if (ExportType == "Copy") {
            navigator.clipboard.writeText(ExportValue);
        } else {
            let blob = null;
            let downloadName = "";

            if (ExportParamaters == "Everything") {
                blob = new Blob([JSON.stringify(ExportValue)], {
                    type: "application/json",
                });
                downloadName = "LevelData.json.json";
            } else {
                blob = new Blob([ExportValue], { type: "text/plain" });

                if (ExportParamaters == "Title") {
                    downloadName = "LevelTitles.txt";
                } else if (ExportParamaters == "Creator") {
                    downloadName = "LevelCreators.txt";
                } else {
                    downloadName = "LevelIDs.txt";
                }
            }

            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = downloadName;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <DialogContent aria-describedby={undefined}>
            <DialogHeader>
                <DialogTitle>Export</DialogTitle>
            </DialogHeader>
            <Separator />
            <p>Copy or download the data of the currently filtered levels.</p>
            <div className="flex gap-4">
                <Select
                    onValueChange={handleExportTypeChange}
                    value={ExportType}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Copy" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Copy">Copy</SelectItem>
                        <SelectItem value="Download">Download</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    onValueChange={handleExportParamatersChange}
                    value={ExportParamaters}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Level Names" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Title">
                            Level Names (List)
                        </SelectItem>
                        <SelectItem value="Creator">
                            Level Creators (List)
                        </SelectItem>
                        <SelectItem value="LevelId">
                            Level IDs (List)
                        </SelectItem>
                        <SelectItem value="Everything">
                            Everything (JSON)
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button onClick={handleExportActivation}>
                {ExportType == "Copy" ? (
                    <ClipboardIcon className="mr-2 h-4 w-4" />
                ) : (
                    <DownloadIcon className="mr-2 h-4 w-4" />
                )}
                {ExportType}
            </Button>
        </DialogContent>
    );
}
