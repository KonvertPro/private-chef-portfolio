export default function Footer() {
  return (
    <footer className="border-t bg-canvas py-8 text-sm text-muted">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} ChefName. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
