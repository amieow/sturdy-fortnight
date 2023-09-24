"use client";

import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/atoms/Command";
import { cn } from "@/lib/utils";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/atoms/Popover";
import { Button } from "@/components/atoms/Button";
import { IconChevronDown, IconchevronUp } from "@/components/atoms/icon";

export function Combobox({
  textDefault = "Select...",
  items,
}: {
  textDefault?: string;
  items: { value: string; label: string }[];
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="tertiary"
          role="combobox"
          aria-expanded={open}
          className="flex items-center  gap-3 w-fit justify-between bg-neutral05 text-left !text-neutral01 font-light text-textS"
        >
          {value
            ? items.find((framework) => framework.value === value)?.label
            : textDefault}
          {open ? (
            <IconchevronUp className={"w-4 h-4"} />
          ) : (
            <IconChevronDown className={"w-4 h-4"} />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0 bg-neutral05 !text-textS border-none">
        <Command>
          <CommandInput placeholder="Search..." className="h-9 " />
          <CommandEmpty>No Data Found</CommandEmpty>
          <CommandGroup>
            {items.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
