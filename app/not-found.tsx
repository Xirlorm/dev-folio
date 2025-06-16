import Link from "next/link";
import Note from "../components/ui/Note";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 h-full text-center p-4">
      <h1 className="text-4xl font-bold mb-3">404 - Page Not Found</h1>
      <div className="max-w-lg">
        The page you are looking for does not exist. Please check the URL or
        return to the homepage.
      </div>
      <Link href="/">Go to Homepage</Link>
      <br />
      <Note>
        If you believe this is an error, please contact support.
        <br />
        <a href="mailto:https://xirlorm@gooogle.com">Contact Support</a>
      </Note>
      <br />
    </div>
  );
}
