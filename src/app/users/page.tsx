import { PageTitle } from "@/components/PageTitle";
import { Table } from "@/components/Table";

export default function Users() {
    return (
        <div className="space-y-4">
            <PageTitle>Users</PageTitle>
            <Table
                header={{
                    id: "ID",
                    name: "Name",
                    email: "Email",
                }}
                items={[
                    {
                        id: "1",
                        name: "John Smith",
                        email: "john@example.com",
                    },
                    {
                        id: "2",
                        name: "Jane Doe",
                        email: "jane@example.com",
                    },
                ]}
            />
        </div>
    );
}
