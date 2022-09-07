import request from "@/utils/http";

const getSysMenuRoutes = () => request.get(`/sysmenu/routes`);

export { getSysMenuRoutes };
