"use client";

export default function SectionNavLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
