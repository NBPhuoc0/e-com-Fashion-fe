export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="py-10 sectionContainer">{children}</section>;
}
