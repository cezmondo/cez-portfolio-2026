export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-(--max-width-content) px-(--spacing-gutter) ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
