"use client";
import { Table } from "@/components/Table";
import { useTodo } from "./useTodo";

export default function Todo() {
    const { todo } = useTodo();
    return (
        <div className="space-y-4">
            <h1 className="text-xl">Todo</h1>
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
