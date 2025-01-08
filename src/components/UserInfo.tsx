import { useEffect, useState } from "react";

const UserInfo: React.FC = () => {
  const [userName, setUserName] = useState<string>("");

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
      <div>안녕하세요, {userName || "사용자"}님</div>
    </>
  );
};

export default UserInfo;
