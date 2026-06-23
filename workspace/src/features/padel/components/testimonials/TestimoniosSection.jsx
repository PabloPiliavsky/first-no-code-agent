export default function TestimoniosSection() {
  const testimonials = [
    { text: "Muy buen ambiente y canchas de primera!", author: "Carlos M.", role: "Jugador Amateur" },
    { text: "Ideal para venir con amigos y pasar un buen rato.", author: "Sofía G.", role: "Líder de Comunidad" },
    { text: "Los chicos se entretuvieron un montón jugando en las canchas.", author: "Martín P.", role: "Padre de Familia" }
  ];

  return (
    <section className="py-16 border-t border-border/40 px-4 bg-muted/10">
      <h2 className="text-3xl font-extrabold text-center mb-10">Lo que dicen de nosotros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-card border border-border p-6 rounded-xl flex flex-col justify-between">
            <p className="text-foreground italic mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                {t.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{t.author}</h4>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
