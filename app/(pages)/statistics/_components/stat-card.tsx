import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  subtitle?: string;
  value: string | number | undefined;
  unit?: string;
  icon?: LucideIcon;
}

export const StatCard = ({
  title,
  subtitle,
  value,
  unit,
  icon: Icon
}: StatCardProps) => {
  return (
    <Card className="w-full md:w-[20rem] flex-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {!!Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {!value ? "N/A" : value} {unit}
        </div>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
};
