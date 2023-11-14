import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany();
  await delay(2000);

  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.Cell>{issue.title}</Table.Cell>
                <Table.Cell>
                  <IssueStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
