import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="text-2xl font-medium">Projeto em construção</h1>
    </main>
  );
}
