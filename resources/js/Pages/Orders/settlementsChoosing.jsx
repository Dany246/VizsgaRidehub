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

export function SettlementsChoosing({ settlements }) {
    // Külön állapotokat hozunk létre
    const [fromOpen, setFromOpen] = React.useState(false);
    const [fromName, setFromName] = React.useState("");

    const [toOpen, setToOpen] = React.useState(false);
    const [toName, setToName] = React.useState("");

    return (
        <div className="flex flex-col bg-color-stone py-12">
            <p className="text-4xl m-auto p-5">Finish your order</p>
            <div className="flex flex-wrap p-8">
                <div className="flex gap-2 m-auto">
                    <p>From:</p>
                    <Popover open={fromOpen} onOpenChange={setFromOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={fromOpen} className="bg-stone-300 hover:bg-stone-200 border-none text-black justify-between">
                                {fromName ? settlements.find((settlement) => settlement.name === fromName)?.name : "Select Settlement"}
                                <ChevronsUpDown className="opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command className="bg-stone-200">
                                <CommandInput placeholder="Search settlements..." className="h-9 bg-white" />
                                <CommandList>
                                    {settlements.length > 0 ? (
                                        <CommandGroup className="bg-stone-200">
                                            {settlements.map((settlement) => (
                                                <CommandItem
                                                    className="bg-stone-200 hover:bg-stone-300"
                                                    key={settlement.id}
                                                    value={settlement.name}
                                                    onSelect={(currentName) => {
                                                        setFromName(currentName);
                                                        setFromOpen(false);
                                                    }}
                                                >
                                                    {settlement.name}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            fromName === settlement.name ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    ) : (
                                        <CommandEmpty>No settlements found.</CommandEmpty>
                                    )}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex p-2 gap-2 m-auto">
                    <p>To:</p>
                    <Popover open={toOpen} onOpenChange={setToOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={toOpen} className="bg-stone-300 hover:bg-stone-200 border-none text-black justify-between">
                                {toName ? settlements.find((settlement) => settlement.name === toName)?.name : "Select Settlement"}
                                <ChevronsUpDown className="opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                        <Command className="bg-stone-200">
                        <CommandInput placeholder="Search settlements..." className="h-9 bg-white" />
                                <CommandList>
                                    {settlements.length > 0 ? (
                                        <CommandGroup className="bg-stone-200">
                                            {settlements.map((settlement) => (
                                                <CommandItem className="bg-stone-200 hover:bg-stone-300"
                                                    key={settlement.id}
                                                    value={settlement.name}
                                                    onSelect={(currentName) => {
                                                        setToName(currentName);
                                                        setToOpen(false);
                                                    }}
                                                >
                                                    {settlement.name}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            toName === settlement.name ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    ) : (
                                        <CommandEmpty>No settlements found.</CommandEmpty>
                                    )}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}
