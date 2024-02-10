import Link from "next/link";
import { LayoutProps } from "../../models";

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <h1>Main layout</h1>

      <Link href="/">Home</Link>
      <br />
      <Link href="/posts">Post</Link>

      <div>{children}</div>
    </>
  );
}
