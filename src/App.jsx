function App() {
  return (
    <div className="min-h-screen p-10 space-y-6">
      <h1 className="font-heading text-6xl">My Projects</h1>
      <h2 className="font-sans text-5xl font-bold text-blue-bright">ASHAD ALAM</h2>
      <p className="font-card text-xl">Employee Management System (Inder)</p>
      <span className="font-mono text-2xl rounded-full bg-navy px-4 py-1">Python</span>
      <p className="font-job text-2xl">Freelancer Developer (Candal)</p>
      <p className="font-date text-lg">2025 - Present (Cambo)</p>
      <div className="flex gap-4">
        <button className="font-button text-2xl rounded-xl bg-blue-bright px-8 py-3">Contact Me</button>
        <button className="font-sans font-bold rounded-xl border border-cyan text-cyan px-8 py-3">View Projects</button>
      </div>
      <div className="bg-card-gradient rounded-2xl p-6 w-80">Card gradient</div>
    </div>
  )
}

export default App