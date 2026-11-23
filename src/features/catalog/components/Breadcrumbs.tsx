import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Miga de pan" className="text-sm text-brand-black/60">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.name}-${index}`}
              className="flex items-center gap-1"
            >
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.path && !isLast ? (
                <Link
                  href={item.path}
                  className="hover:text-brand-orange hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-brand-black" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
