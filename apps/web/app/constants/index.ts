import {
  HomeIcon,
  LucideIcon,
  Settings,
  ShieldAlert,
  TrendingUp,
  Users2,
} from "lucide-react";
import { useMemo } from "react";
interface SidebarRoute {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const useSidebarRoutes = (teamId?: string) => {
  return useMemo(() => {
    if (!teamId) return [];

    const routes: SidebarRoute[] = [
      { title: "Spaces", url: `/t/${teamId}`, icon: HomeIcon },
      {
        title: "Permissions",
        url: `/t/${teamId}/permissions`,
        icon: ShieldAlert,
      },
      { title: "Activity", url: `/t/${teamId}/activity`, icon: TrendingUp },
      { title: "Settings", url: `/t/${teamId}/settings`, icon: Settings },
      { title: "Members", url: `/t/${teamId}/members`, icon: Users2 },
    ];
    return routes;
  }, [teamId]);
};
