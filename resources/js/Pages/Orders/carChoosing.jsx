"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const CarChoosing = ({cars, data, setData}) => {
     const [carOpen, setCarOpen] = React.useState(false);
  
  return (
    <Popover open={carOpen} onOpenChange={setCarOpen}>
    <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={carOpen} className="bg-stone-300 hover:bg-stone-200 border-none text-black justify-between">
            {data ? cars.find((car) => car.cartype === data)?.cartype : "Select Car"}
            <ChevronsUpDown className="opacity-50" />
        </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
        <Command className="bg-stone-200">
            <CommandInput placeholder="Search settlements..." className="h-9 bg-white" />
            <CommandList>
                {cars.length > 0 ? (
                    <CommandGroup className="bg-stone-200">
                        {cars.map((car) => (
                            <CommandItem
                                className="bg-stone-200 hover:bg-stone-300"
                                key={car.id}
                                value={car.cartype}
                                onSelect={() => {
                                    setData('car', car.id);
                                    setCarOpen(false);
                                }}
                            >
                                {car.cartype}
                                <Check
                                    className={cn(
                                        "ml-auto",
                                        data === car.cartype ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                ) : (
                    <CommandEmpty>No cars found.</CommandEmpty>
                )}
            </CommandList>
        </Command>
    </PopoverContent>
</Popover>
  )
}

export default CarChoosing