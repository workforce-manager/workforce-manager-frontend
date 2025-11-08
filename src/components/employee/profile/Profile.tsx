import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar";
import styles from "./Profile.module.css";
import { useAuth } from "@/hooks/useAuth";
import { Progress } from "@/components/ui/progress";
import { UserCircle2, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPersonalInfoItems, supportContacts } from "./data/profile.data";

export function Profile() {
  const { user } = useAuth();
  const personalInfoItems = getPersonalInfoItems(user);

  return (
    <div className={styles.container}>
      <Card className={styles.summaryCard}>
        <div className={styles.summaryLayout}>
          <div className={styles.summaryColumn}>
            <Avatar className={styles.summaryAvatar}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className={styles.summaryColumn}>
            <div className={styles.summaryInfo}>
              <h1 className={styles.userName}>
                {user?.name || "Employee"}
              </h1>
              <div className={styles.summaryProgress}>
                <div className={styles.progressHeader}>
                  <span className={styles.summaryLabel}>
                    Profile completion
                  </span>
                  <span className={styles.summaryValue}>
                    70%
                  </span>
                </div>
                <Progress value={70} className={styles.progressBar} />
              </div>
              <div className={styles.summaryActivity}>
                <span className={styles.statusDot}></span>
                <span className={styles.summaryText}>
                  Updated: 2 hours ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className={styles.personalCard}>
        <CardHeader className={styles.personalHeader}>
          Personal Information
        </CardHeader>
        <CardContent className={styles.personalContent}>
          <div className={styles.infoList}>
            {personalInfoItems.map((item) => (
              <div className={styles.infoItem} key={item.label}>
                <div className={styles.infoIcon}>
                  <item.icon className={styles.icon} />
                </div>
                <div className={styles.infoContent}>
                  <p className={styles.infoLabel}>
                    {item.label}
                  </p>
                  <p className={styles.infoValue}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className={styles.supportCard}>
        <CardHeader className={styles.supportHeader}>
          Support Contacts
        </CardHeader>
        <CardContent className={styles.supportContent}>
          <div className={styles.contactList}>
            {supportContacts.map((contact) => (
              <div className={styles.contactItem} key={contact.email}>
                <div className={styles.contactIcon}>
                  <UserCircle2 className={styles.contactAvatar} />
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactName}>
                    {contact.name}
                  </p>
                  <div className={styles.contactLinks}>
                    <span className={styles.contactRole}>
                      {contact.role}
                    </span>
                    <span className={styles.separatorDot}>•</span>
                    <span className={styles.contactLink}>
                      <Mail className={styles.contactLinkIcon} />
                      {contact.email}
                    </span>
                    <span className={styles.separatorDot}>•</span>
                    <span className={styles.contactLink}>
                      <Phone className={styles.contactLinkIcon} />
                      {contact.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
