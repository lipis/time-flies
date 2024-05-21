import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ weight: "400", subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`min-h-screen flex flex-col ${noto.className}`}>
      <main className="flex-grow">{children}</main>

      <footer className="border-t border-gray-700 text-center text-sm text-gray-500 p-4">
        <p>
          Made with ❤️ by Less is More |{" "}
          <a href="https://github.com/lipis/time-flies">Source Code</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
