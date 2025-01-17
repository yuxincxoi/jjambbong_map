import { useEffect, useState } from "react";

const UserInfo: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch("/api/users/me", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserName(data.name);
          setUserId(data.id);
        } else {
          console.error("Failed to fetch user information.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <div className="ml-4 my-3">
        <div className="text-xl font-semibold">{userName || "사용자"}</div>
        <div className="text-lg font-thin">{userId || "id"}</div>
      </div>
    </>
  );
};

export default UserInfo;
