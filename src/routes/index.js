import { protectedRoutes, authRoute } from "./routes";
export function getRoutes(isAuthenticated) {
  return [...protectedRoutes(isAuthenticated), ...authRoute()];
}
