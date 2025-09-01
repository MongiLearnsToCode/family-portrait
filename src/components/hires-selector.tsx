'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function HiresSelector({ onCheckedChange }: { onCheckedChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="hires" onCheckedChange={onCheckedChange} />
      <Label htmlFor="hires">
        4K High Resolution (no watermark)
      </Label>
    </div>
  );
}
