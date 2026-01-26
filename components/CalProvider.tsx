"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "construye-y-automatiza-con-ia" });
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, []);

  return <>{children}</>;
}

export default CalProvider;
