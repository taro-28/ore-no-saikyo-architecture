import { Table } from "@/components/Table";

export default function Todo() {
    return (
        <div>
            <h1>Todo</h1>
            <Table
                header={{
                    title: "Title",
                    feature: "Feature",
                }}
                items={[
                    {
                        title: "resizable",
                        feature: "sidebar",
                    },
                    {
                        title: "styling",
                        feature: "table",
                    },
                    {
                        title: "sort",
                        feature: "table",
                    },
                ]}
            />
        </div>
    );
}
