import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Wait for authentication state to load
  useEffect(() => {
    if (isAuthenticated === undefined) return; // If still loading, do nothing

    // Logic for redirecting based on authentication status and role
    if (!isAuthenticated) {
      if (
        !["/login", "/register"].some((path) =>
          location.pathname.includes(path)
        )
      ) {
        navigate("/auth/login"); // Redirect unauthenticated users to login
      }
    } else {
      if (location.pathname === "/") {
        // Redirect to the appropriate page based on the user's role
        if (user?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/shop/home");
        }
      }

      // Prevent non-admin users from accessing admin routes
      if (user?.role !== "admin" && location.pathname.includes("/admin")) {
        navigate("/unauth-page");
      }

      // Prevent admin users from accessing shop routes
      if (user?.role === "admin" && location.pathname.includes("/shop")) {
        navigate("/admin/dashboard");
      }

      // Handle authenticated users trying to access login/register pages
      if (
        (location.pathname.includes("/login") ||
          location.pathname.includes("/register")) &&
        user?.role
      ) {
        navigate(user?.role === "admin" ? "/admin/dashboard" : "/shop/home");
      }
    }
  }, [isAuthenticated, user, location, navigate]); // Dependencies for effect

  // Render children if no redirect is needed
  return <>{children}</>;
}

export default CheckAuth;
