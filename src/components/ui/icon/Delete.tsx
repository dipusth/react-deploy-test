import type { DeleteProps } from "@/types/PostType";
import { Trash } from "lucide-react";

const Delete = ({ className }: DeleteProps) => {
  return <Trash className={className} />;
};

export default Delete;
