export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container-max py-10 grid md:grid-cols-2 gap-6 items-center">
        <p className="muted">© {year} ForexBlackBox. All rights reserved.</p>
        <nav className="flex gap-4 md:justify-end text-sm">
          <a href="/legal/terms">Terms</a>
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/risk">Risk Disclosure</a>
          <a href="/legal/refund">Refund Policy</a>
        </nav>
      </div>
    </footer>
  )
}
