import type { EmailProps } from "@/types/PostType";
import { Mail } from "lucide-react";

const Email = ({ className }: EmailProps) => {
  return <Mail className={className} />;
};

export default Email;
