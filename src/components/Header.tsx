import { FC } from "react";

type Props = JSX.IntrinsicElements["header"];

export const Header: FC<Props> = (props) => (
    <header {...props}>Taro Architecture</header>
);
