"use client";
import { Table } from "@/components/Table";
import { useTodo } from "./useTodo";
import { PageTitle } from "@/components/PageTitle";

export default function Todo() {
    const { todo } = useTodo();
    return (
        <div className="space-y-4">
            <PageTitle>Todo</PageTitle>
            <Table
                header={{
                    title: "Title",
                    feature: "Feature",
                }}
                items={todo}
            />
        </div>
    );
}
