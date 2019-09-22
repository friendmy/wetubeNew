import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTuve";
  res.locals.routes = routes;
  next();
};
