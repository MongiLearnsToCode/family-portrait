'use client';

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BackgroundSelector({ onSelect }: { onSelect: (value: string) => void }) {
  return (
    <RadioGroup defaultValue="neutral" onValueChange={onSelect}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="neutral" id="r1" />
        <Label htmlFor="r1">Neutral</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="studio" id="r2" />
        <Label htmlFor="r2">Studio</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="travel" id="r3" />
        <Label htmlFor="r3">Travel</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="fantasy" id="r4" />
        <Label htmlFor="r4">Fantasy</Label>
      </div>
    </RadioGroup>
  );
}
