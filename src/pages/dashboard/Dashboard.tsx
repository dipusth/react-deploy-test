import { deleteActiveUser, getActiveUser } from "@/LocalStorage";
import type { IuserType } from "@/types/PostType";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeser, setActiveUser] = useState<IuserType>();
  const navigate = useNavigate();
  useEffect(() => {
    const data = getActiveUser();
    console.log("data on dashboard page", data);
    if (data == null) {
      navigate("/login");
    }
    setActiveUser(data);
  }, [navigate]);

  const handleLogOut = () => {
    deleteActiveUser();
    navigate("/login");
  };
  console.log("activeser", activeser);
  return (
    <div className="dark:text-white h-full p-5">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-4xl font-bold"> Welcome! {activeser?.name}</h1>
          <p>This is Dashboard page</p>
        </div>

        <button
          className="inline-block w-40 btn item-center mt-0"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>

      <div className="card-list flex flex-wrap gap-5 mt-10">
        <div className="card border rounded-lg border-slate-300 item-center">
          <h4>Cards</h4>
        </div>
        <div className="card border rounded-lg border-slate-300 item-center">
          <h4>Cards</h4>
        </div>
        <div className="card border rounded-lg border-slate-300 item-center">
          <h4>Cards</h4>
        </div>
        <div className="card border rounded-lg border-slate-300 item-center">
          <h4>Cards</h4>
        </div>
      </div>
      <div className="card border rounded-lg border-slate-300 item-center min-h-1.5 mt-5">
        Analytics
      </div>
    </div>
  );
};

export default Dashboard;
