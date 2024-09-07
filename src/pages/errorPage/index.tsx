import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../../component/button";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl uppercase font-bold mb-4">Oops!</h1>
      <p className="text-xl uppercase font-bold mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-gray-600">
        {(error as Error)?.message || "Unknown error"}
      </p>
      <Button
        type="submit"
        buttonColor="danger"
        buttonSize="medium"
        className="uppercase"
        onClick={() => navigate("/")}
      >
        Return to homepage
      </Button>
    </div>
  );
};
