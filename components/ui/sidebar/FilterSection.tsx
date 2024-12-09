"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onOptionChange: (optionId: string) => void;
}

export function FilterSection({
  title,
  options,
  selectedOptions,
  onOptionChange,
}: FilterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={() => onOptionChange(option.id)}
            />
            <Label
              htmlFor={option.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}