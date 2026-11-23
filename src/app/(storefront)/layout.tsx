import { SiteFooter } from "@/app/(storefront)/_components/SiteFooter";
import { SiteHeader } from "@/app/(storefront)/_components/SiteHeader";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
