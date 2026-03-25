"use client"

import { Board } from "@/lib/models/models.type";
import { Award, Calendar, CheckCircle2, Mic, XCircle } from "lucide-react";

interface kanbanBoardProps {
    board : Board;
    userId : string;
}

interface ColConfig {
  color: string;
  icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColConfig> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];





export default function KanbanBoard({board , userId} : kanbanBoardProps) {
    const columns = board.columns
    return 
    <>
        <div>
            <div>
                {columns.map((col, key) => {
                    const config = COLUMN_CONFIG[key] || {
                        color: "bg-gray-500",
                        icon: <Calendar className="h-4 w-4" />,
                    };
                    return (
                        <>
                        <h1>hello</h1>
                        </>
                )})}
            </div>
        </div>
    </>
}