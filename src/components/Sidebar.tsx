import Link from "next/link";

const items: {
    label: string;
    href: string;
}[] = [
    { label: "Home", href: "/" },
    { label: "User", href: "/users" },
];

type Props = JSX.IntrinsicElements["aside"];

export const Sidebar = (props: Props) => (
    <aside {...props}>
        <nav className="flex flex-col">
            {items.map(({ label, href: path }) => (
                <Link key={label} href={path}>
                    {label}
                </Link>
            ))}
        </nav>
    </aside>
);
