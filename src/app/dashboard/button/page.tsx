import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button variant="default">default</Button>
      <Button variant="success">success</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="outline">outline</Button>
      <Button variant="link">link</Button>
      <Button variant="secondary">secondary</Button>
      <Button capitalize={true}>capitalize true</Button>
      <Button disabled>disabled</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button variant="default">
        <Mail className="mr-2 h-4 w-4 " /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
