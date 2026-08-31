import { Link } from "react-router-dom";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="min-h-screen grid place-items-center bg-background px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl">
        <Link to="/" className="mb-6 block text-center text-lg font-bold text-primary">BİEM Elektronik</Link>
        {title && <h1 className="text-2xl font-bold text-foreground">{title}</h1>}
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </section>
    </main>
  );
}

