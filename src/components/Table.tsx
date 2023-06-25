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
    <table {...props} className="border-2 border-gray-100">
        <thead className="border-collapse border-b-2 border-solid border-gray-100">
            <tr>
                {Object.entries(header).map(([key, value]) => (
                    <th key={key} className="px-4 py-2">
                        {value}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                    {Object.keys(header).map((key) => (
                        <td key={key} className="px-4 py-2">
                            {item[key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);
