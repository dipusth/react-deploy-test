import type { notificationProps } from "@/types/PostType";
import { Bell } from "lucide-react";

const Notification = ({ className }: notificationProps) => {
  return <Bell className={className} />;
};

export default Notification;
