"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export function SettlementsChoosing({ settlements }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  return (
      <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                  <ChevronsUpDown className="opacity-50" />
              </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
              <Command>
                  <CommandInput placeholder="Search framework..." className="h-9" />
                  <CommandList>
                      {settlements && settlements.length > 0 ? (
                          <CommandGroup>
                              {settlements.map((settlement) => (
                                  <CommandItem
                                      key={settlement.name}
                                      value={settlement.name}
                                      onSelect={(currentName) => {
                                          setValue(currentName);
                                          setOpen(false);
                                      }}
                                  >
                                      {settlement.label}
                                      <Check
                                          className={cn(
                                              "ml-auto",
                                              name === settlement.name ? "opacity-100" : "opacity-0"
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
  );
}