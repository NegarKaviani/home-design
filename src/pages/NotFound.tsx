import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-900/5">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">404 error</p>
          <h1 className="mt-6 text-5xl font-semibold text-slate-950 sm:text-6xl">Page not found</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The page you’re looking for doesn’t exist, or it may have been moved.
          </p>
          <div className="mt-8 inline-flex rounded-3xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            <Link to="/">Return home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
