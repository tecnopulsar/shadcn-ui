"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function Sonner() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Event has been created", {
          className: "bg-green-900 text-black",
          duration: 3000,
          position: "top-right",
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
