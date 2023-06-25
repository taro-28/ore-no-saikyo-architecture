"use client";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, memo } from "react";

type Item = {
    icon: string;
    label: string;
    pathname: string;
};

const items: Item[] = [
    { icon: "radix-icons:home", label: "Home", pathname: "/" },
    { icon: "ri:todo-line", label: "Todo", pathname: "/todo" },
    { icon: "ph:user", label: "User", pathname: "/users" },
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
                {items.map(({ icon, label, pathname }) => (
                    <SidebarItem
                        key={label}
                        icon={icon}
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
    ({ icon, pathname, label, className, ...props }: SidebarItemProps) => {
        const currentPathname = usePathname();
        return (
            <Link
                key={label}
                href={pathname}
                className={clsx(
                    "flex items-center space-x-2 py-2 pl-4 pr-2 hover:bg-gray-50",
                    currentPathname === pathname && "text-blue-500",
                    className
                )}
                {...props}
            >
                <Icon icon={icon} className="text-xl" />
                <span>{label}</span>
            </Link>
        );
    }
);
