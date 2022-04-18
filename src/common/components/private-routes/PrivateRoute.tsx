import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AbilityContext } from "src/common/casl/Abilitites";
import { Resource } from "src/common/casl/interfaces";
import { useAuth } from "src/common/hooks/useAuth";
import { Page403 } from "./Page403";

type PrivateRouteProps = {
  resource?: Resource;
  children: React.ReactNode;
};
function PrivateRoute({ children, resource }: PrivateRouteProps) {
  const auth = useAuth();
  const { pathname } = useLocation();
  const ability = useContext(AbilityContext);
  const [hasPer, setHasPer] = useState(false);

  function renderTargetPage() {
    if (!auth) {
      return <>{children}</>;
    } else if (auth && hasPer) {
      return <>{children}</>;
    }
    return <Page403 />;
  }
  useEffect(() => {
    const isHasPermission = ability.can("manage", resource || "all") || resource === "all";
    setHasPer(isHasPermission);
    // !auth && router(ROUTE_HOME);
  }, [pathname]);
  return renderTargetPage();
}

export default PrivateRoute;
