import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdShare, MdDeleteForever } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GridView = () => {
  const [hover, setHover] = useState({ hovered: false, index: null });
  const repeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // {console.log(window.innerWidth)}
  return (
    <div className="grid gap-x-10 grid-cols-2 gap-y-5 xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-4">
      {repeat.map((r) => (
        <Card
          className={`shadow-xl`}
          onMouseOver={() => setHover({ hovered: r })}
          onMouseLeave={() => setHover({ hovered: null })}
          key={r}
        >
          <CardHeader className="p-2 items-center relative">
            <FcGoogle className="text-7xl" />
            {hover.hovered === r && (
              <CardHeader className="bg-opacity-90 bg-zinc-700 -top-[0.35rem] -mt-2 rounded-t-xl w-full h-full absolute">
                <Button variant="secondary" className="">
                  Launch
                </Button>
              </CardHeader>
            )}
          </CardHeader>
          <div className="bg-slate-600 rounded-b-xl p-2">
            <div
              className={`flex ${
                hover.index === r ? "justify-around" : "justify-center"
              }`}
            >
              <div className="truncate">
                <p className="text-sm font-bold text-white truncate">
                  Laser Lemonade
                </p>
                <p className="text-zinc-300 truncate">bsfjbajfwfedd</p>
              </div>
              {hover.hovered === r && (
                <div className="flex text-xl cursor-pointer text-orange-600 items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FaEdit className="mx-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <MdShare className="mr-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <MdDeleteForever />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GridView;
