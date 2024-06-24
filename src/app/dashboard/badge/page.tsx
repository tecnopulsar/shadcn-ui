import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div>
      <Badge>Badge</Badge>
      <Badge variant="destructive">Badge</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="success" capitalize >success</Badge>
    </div>
  );
}
