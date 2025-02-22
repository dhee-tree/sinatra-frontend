import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-none shadow-xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-dark">
            404
          </CardTitle>
          <CardDescription className="text-dark/70 mt-2 text-lg">
            Oops! Looks like this pebble rolled off the path.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-dark/80">
            We couldn&apos;t find this page, but don&apos;t worry—there&apos;s still plenty of
            good to do!
          </p>

          <div className="flex justify-center items-center gap-2">
            <span className="text-sm text-dark/60">
              Return to earn more{" "}
              <span className="text-accent font-bold">points</span>!
            </span>
            <div className="w-4 h-4 bg-accent rounded-full animate-bounce" />
          </div>
        </CardContent>
        <div className="flex justify-center pb-6">
          <Link href="/">
            <Button className="bg-accent text-white hover:bg-accent/90 transition-all">
              Back to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
