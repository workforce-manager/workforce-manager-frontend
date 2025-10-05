import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Building2 } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function StatCard({
  icon: Icon,
  title,
  description,
  value,
  trend,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  value: string;
  trend?: string;
}) {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <Icon className="text-muted-foreground" />
          <span>{title}</span>
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <CardAction>
          <Button size="sm" variant="outline">View</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-3xl font-semibold">{value}</div>
        {trend && (
          <div className="text-muted-foreground text-sm mt-1">{trend}</div>
        )}
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 w-full max-w-[1200px] mx-auto">
      <StatCard
        icon={Users}
        title="Total Employees"
        description="Active across the company"
        value="128"
        trend="+6 this month"
      />
      <StatCard
        icon={Building2}
        title="Departments"
        description="Functional groups"
        value="8"
        trend="Stable"
      />
      <StatCard
        icon={BarChart3}
        title="Avg. Tenure"
        description="Across all employees"
        value="2.4 yrs"
        trend="+0.1 vs last year"
      />

      <Card className="md:col-span-2 xl:col-span-3">
        <CardHeader className="border-b">
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Last updates across employees and departments</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <ul className="text-sm space-y-2">
            <li>• Hired: Jane Doe - Engineering</li>
            <li>• Promotion: John Smith - Sales Manager</li>
            <li>• Transfer: Anna Lee - Marketing → Product</li>
          </ul>
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" size="sm">See all</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
