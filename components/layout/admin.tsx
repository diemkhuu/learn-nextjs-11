import Link from "next/link";
import { LayoutProps } from "../../models";

export function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <h1>Admin layout</h1>
      <div>Sidebar</div>

      <Link href="/">Home</Link>
      <Link href="/posts">Post</Link>

      <div>{children}</div>
    </>
  );
}
