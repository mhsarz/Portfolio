export default function LandingPage() {
  return (
    <div className="space-y-32"> {/* Large spacing between sections */}
      
      <section id="about" className="min-h-[50vh] pt-20">
        <h1>Mahsa Barzegarsakhvidi</h1>
        <p>Introduction content...</p>
      </section>

      <section id="projects" className="min-h-[50vh] pt-20">
        <h2>Projects</h2>
        <p>MindReader and other work...</p>
      </section>

      <section id="skills" className="min-h-[50vh] pt-20">
        <h2>Technical Toolkit</h2>
        {/* Your skills lists here */}
      </section>

      <section id="hobbies" className="min-h-[50vh] pt-20">
        <h2>Hobbies</h2>
        <p>Baking and more...</p>
      </section>

      <section id="blog" className="min-h-[50vh] pt-20">
        <h2>Blog</h2>
        <p>Writing and thoughts...</p>
      </section>

    </div>
  );
}