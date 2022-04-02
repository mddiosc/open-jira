import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from "next";

interface ErrorEntryProps {}

const ErrorEntry: NextPage<ErrorEntryProps> = () => {
  const { push } = useRouter();

  return (
    <>
      <div>Error</div>
      <Button onClick={() => push("/")}>Go Home</Button>
    </>
  );
};

export default ErrorEntry;
