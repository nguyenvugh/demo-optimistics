export const ROUTE_LOGIN = "/login";
export const ROUTE_HOME = "/";
export const ROUTE_ADD_TODO = relativePath([ROUTE_HOME, "add-new"]);

function relativePath(paths: string[]) {
  return paths.join("/");
}
