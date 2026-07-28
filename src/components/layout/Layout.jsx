export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-5xl p-8">
        {children}
      </div>
    </div>
  )
}