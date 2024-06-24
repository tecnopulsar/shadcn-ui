'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon, Smartphone } from "lucide-react";

export default function DialogPage() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share Link</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share Link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                className="col-span-3"
                readOnly={true}
              />
              <Button
                type="submit"
                size="sm"
                className="px-3"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://ui.shadcn.com/docs/installation"
                  )
                }
              >
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button variant="secondary" type="submit">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
