import { LayoutProps } from "../../models";
import Link from "next/link";

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <h1>Main layout</h1>

      <Link href="/">Home</Link>
      <Link href="/posts">Post</Link>

      <div>{children}</div>
    </>
  );
}
