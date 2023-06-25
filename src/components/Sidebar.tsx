"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, memo } from "react";

type Item = {
    label: string;
    pathname: string;
};

const items: Item[] = [
    { label: "Home", pathname: "/" },
    { label: "User", pathname: "/users" },
    { label: "Todo", pathname: "/todo" },
];

type Props = JSX.IntrinsicElements["aside"];

export const Sidebar = memo(({ className, ...props }: Props) => {
    return (
        <aside
            className={clsx(
                "w-48 border-r-2 border-solid border-gray-200",
                className
            )}
            {...props}
        >
            <nav className="flex flex-col">
                {items.map(({ label, pathname }) => (
                    <SidebarItem
                        key={label}
                        label={label}
                        pathname={pathname}
                    />
                ))}
            </nav>
        </aside>
    );
});

type SidebarItemProps = Item &
    Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

const SidebarItem = memo(
    ({ pathname, label, className, ...props }: SidebarItemProps) => {
        const currentPathname = usePathname();
        return (
            <Link
                key={label}
                href={pathname}
                className={clsx(
                    "py-2 pl-4 pr-2 hover:bg-gray-50",
                    currentPathname === pathname && "text-blue-500",
                    className
                )}
                {...props}
            >
                {label}
            </Link>
        );
    }
);
