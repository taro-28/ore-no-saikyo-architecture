import { ReactNode } from "react";

type Item = { [key: string]: string };

type Props<T extends Item> = {
    header: T;
    items: {
        [key in keyof T]: ReactNode;
    }[];
} & JSX.IntrinsicElements["table"];

export const Table = <T extends Item>({
    header,
    items,
    ...props
}: Props<T>) => (
    <table {...props}>
        <thead>
            <tr>
                {Object.entries(header).map(([key, value]) => (
                    <th key={key}>{value}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    {Object.keys(header).map((key) => (
                        <td key={key}>{item[key]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);
