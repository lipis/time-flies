import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let date = new Date();

  return {
    redirect: {
      destination: `/?d=${date.toISOString().split("T")[0]}&utc=${date
        .toISOString()
        .split("T")[1]
        .split(".")[0]
        .substring(0, 5)}`,
      permanent: false,
    },
  };
};

export default function Now() {
  return null;
}
