import {
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import styles from "./Dashboard.module.css";
import { Button } from "@/components/ui/button";
import { ACTIVITY_DATA, ICON_MAP, QUICK_ACTIONS_DATA, STATS_DATA } from "./dashboard.data";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.title}>
          Dashboard
        </h1>
        <p className={styles.welcomeText}>
          Welcome back, {user?.name || "Administrator"}!
        </p>
      </div>

      <div className={styles.statsGrid}>
        {STATS_DATA.map((stat) => {
          const IconComponent = ICON_MAP[stat.icon as keyof typeof ICON_MAP];
          return (
            <Card key={stat.id} className={styles.statCard}>
              <CardHeader className={styles.statHeader}>
                <IconComponent className={styles.statIcon} />
                <CardTitle className={styles.statTitle}>
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={styles.statNumber}>
                  {stat.number}
                </div>
                <p className={styles.statDescription}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className={styles.quickActionsCard}>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>
            Quick Actions
          </CardTitle>
          <CardDescription className={styles.cardDescription}>
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={styles.quickActions}>
            {QUICK_ACTIONS_DATA.map((action) => {
              const IconComponent = ICON_MAP[action.icon as keyof typeof ICON_MAP];
              return (
                <Button key={action.id} className={styles.actionButton}>
                  <IconComponent className={styles.actionIcon} />
                  {action.label}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className={styles.activityCard}>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>
            Recent Activity
          </CardTitle>
          <CardDescription className={styles.cardDescription}>
            Latest system activities and user actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={styles.activityList}>
            {ACTIVITY_DATA.map((activity) => (
              <div key={activity.id} className={`${styles.activityItem} ${styles[activity.status]}`}>
                <div className={styles.activityIcon}>
                  <div className={`${styles.statusDot} ${styles[activity.status]}`}></div>
                </div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>
                    {activity.text}
                  </p>
                  <p className={styles.activityTime}>
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
