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
      <div>{userName || "사용자"}</div>
      <div>{userId || "id"}</div>
    </>
  );
};

export default UserInfo;
