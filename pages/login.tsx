import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { next } = router.query as { next?: string };

  return (
    <div className="flex h-screen w-screen justify-center">
      <div
        className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="z-10 mt-[calc(30vh)] h-fit w-full mx-5 sm:mx-0 max-w-md overflow-hidden border border-border bg-gray-50 dark:bg-gray-900 rounded-lg sm:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <span className="text-xl font-bold tracking-tighter text-foreground">
              Papermark
            </span>
          </Link>
          <h3 className="text-2xl text-foreground font-medium">
            Start sharing documents
          </h3>
        </div>
        <div className="flex flex-col px-4 py-8 sm:px-16">
          <Button
            onClick={() => {
              signIn("google", {
                ...(next && next.length > 0 ? { callbackUrl: next } : {}),
              });
            }}
            className="flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              fill="currentColor"
              className="h-4 w-4 mr-2"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            <span>Continue with Google</span>
          </Button>
        </div>
        <div className="flex flex-col px-4 py-8 sm:px-16">
          <Button
            onClick={() => {
              signIn("github", {
                ...(next && next.length > 0 ? { callbackUrl: next } : {}),
              });
            }}
            className="flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="bi bi-github h-4 w-4 - mr-2"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>Continue with GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
