import { Terminal, AlertTriangleIcon, AlertCircleIcon, AlertOctagonIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertPage() {
  return (
    <div>
      <Alert>
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant={"destructive"}>
        <AlertOctagonIcon className="h-4 w-4" />
        <AlertTitle>Destructive!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant={"success"}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
