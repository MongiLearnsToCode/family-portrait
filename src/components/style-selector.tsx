'use client';

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function StyleSelector({ onSelect }: { onSelect: (value: string) => void }) {
  return (
    <RadioGroup defaultValue="realistic" onValueChange={onSelect}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="realistic" id="s1" />
        <Label htmlFor="s1">Realistic</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="painting" id="s2" />
        <Label htmlFor="s2">Painting</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="cartoon" id="s3" />
        <Label htmlFor="s3">Cartoon</Label>
      </div>
    </RadioGroup>
  );
}
