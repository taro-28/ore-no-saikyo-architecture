import clsx from "clsx";

type Props = JSX.IntrinsicElements["header"];

export const Header = ({ className, ...props }: Props) => (
    <header className={clsx("pl-4", className)} {...props}>
        <span className="text-xl font-bold">Taro Architecture</span>
    </header>
);
