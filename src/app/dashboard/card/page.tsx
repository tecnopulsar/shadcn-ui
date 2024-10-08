import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {"123456".split("").map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex justify-between w-[50%]">
            <Button variant="ghost">info</Button>
            <Button>más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
