import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex flex-col">
      <header className="h-16 bg-gray-100 shadow px-4 flex items-center">
        <h1 className="text-xl font-semibold">Employee Manager</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-50 p-4">
          <nav className="space-y-2">
            <a href="/dashboard" className="block hover:underline">
              Dashboard
            </a>
            <a href="/employees" className="block hover:underline">
              Employees
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  ),
});
