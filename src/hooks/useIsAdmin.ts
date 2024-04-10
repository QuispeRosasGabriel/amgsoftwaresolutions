import { useEffect, useState } from "react";
import { ADMIN_ROLES } from "../mocks";

export const useIsAdmin = (mail: string) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(!!ADMIN_ROLES.find((v) => v === mail));
    localStorage.setItem(
      "IS_ADMIN",
      JSON.stringify(!!ADMIN_ROLES.find((v) => v === mail))
    );
  }, [mail]);

  return {
    isAdmin,
  };
};
