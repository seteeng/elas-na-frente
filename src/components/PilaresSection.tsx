const PilaresSection = () => {
  const pilares = [
    {
      number: "01",
      title: "COLABORAÇÃO SOCIAL",
      description: "Conexão com pessoas que compartilharão seu conhecimento.",
    },
    {
      number: "02",
      title: "CAPACITAÇÃO ACESSÍVEL",
      description: "Conhecimento e informação ao alcance de todas.",
    },
    {
      number: "03",
      title: "DESCENTRALIZAÇÃO",
      description: "Estimular a troca de experiências e oportunizar novos negócios nos diversos bairros do município.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-100/50 to-pink-100/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-16">
          Pilares de Atuação
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div
              key={pilar.number}
              className="bg-gradient-purple rounded-3xl p-8 text-white shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl md:text-7xl font-bold mb-4 opacity-80">
                {pilar.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
                {pilar.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
