import CommonForm from "@/components/common/form";
import { useToast } from "@/hooks/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
          variant: "success", // Ensure success variant is used
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive", // Ensure failure variant is used
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="flex items-center gap-2 text-sm text-destructive border border-destructive rounded-md p-3 mt-4 bg-destructive/10">
        {" "}
        <AlertTriangle className="w-4 h-4" />
        <p className="text-sm">Didn’t get logged in? Try reloading the page.</p>
      </div>
    </div>
  );
}

export default AuthLogin;
