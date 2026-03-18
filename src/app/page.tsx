'use client';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { hobbies } from '@/data/hobbies';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-32">
      {/* SECTION: ABOUT */}
      <section id="about" className="min-h-[80vh] flex flex-col justify-center py-20">
        <div className="space-y-8">
          {/* Headline: Using Serif for that "Book" feel */}
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-tight">
            Building interfaces <br /> 
            informed by <span className="italic text-accent">human cognition.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pt-8">
            {/* Left Column: The Narrative Bio */}
            <div className="md:col-span-3 space-y-6 text-lg text-stone-800 leading-relaxed font-light">
              <p>
                I am a Computer Science student at the <span className="font-medium">Lassonde School of Engineering</span>, 
                specializing in the intersection of software development and neuroscience. 
              </p>
              <p>
                My work focuses on how cognitive biases—like the framing effect and anchoring—impact 
                Human-Computer Interaction. Whether I am leading LeetCode sessions for the 
                <span className="font-medium"> CSHub</span> or developing interactive web tools, 
                I aim to create digital experiences that are as intuitive as they are technically robust.
              </p>
              <p>
                Beyond the terminal, I find my balance in the kitchen, where the precision of 
                baking meets the creativity of design.
              </p>
            </div>

            {/* Right Column: Quick Facts / Photo Placeholder */}
            <div className="md:col-span-2 space-y-8">
              <div className="aspect-[4/5] bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-center text-stone-400 italic">
                [ Photo ]
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">Location</h4>
                <p className="text-sm">North York, Toronto, ON</p>
                
                <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">Contact</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="mailto:mahsaawb.r@example.com" className="hover:text-accent transition-colors underline decoration-stone-200 underline-offset-4">Email</a>
                  <a href="https://linkedin.com/in/mahsabarzegar" className="hover:text-accent transition-colors underline decoration-stone-200 underline-offset-4">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PROJECTS */}
      <section id="projects" className="min-h-screen pt-20">
        <h2 className="font-serif text-3xl mb-12">Selected Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group space-y-4">
              {/* Placeholder for Project Image */}
              <div className="aspect-video bg-stone-100 rounded-lg overflow-hidden border border-stone-200" />
              
              <div className="space-y-2">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-accent leading-relaxed">{project.description}</p>
                
                <div className="flex gap-3 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-stone-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: SKILLS */}
      <section id="skills" className="min-h-[60vh] pt-24">
        <h2 className="font-serif text-3xl mb-12">Technical Toolkit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="space-y-4">
              {/* Category Header: Small, uppercase, and muted for that high-end look */}
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                {cat.category}
              </h3>
              
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-stone-700 font-light hover:text-foreground transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

        {/* SECTION: HOBBIES - Corrected Version */}
        <section id="hobbies" className="min-h-screen pt-24 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hobbies.map((hobby) => (
              <div 
                key={hobby.id} 
                className="group relative aspect-square bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-stone-100 group-hover:bg-stone-200 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-stone-800">{hobby.title}</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      
      {/* SECTION: BLOG */}
      <section id="blog" className="min-h-screen pt-24 pb-32">
        <h2 className="font-serif text-3xl mb-12">Writing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group block">
              <div className="relative aspect-[16/10] bg-stone-100 rounded-xl overflow-hidden border border-stone-200 shadow-sm transition-all duration-500 hover:shadow-md">
                {/* Photo Placeholder - Kept on one line to prevent hydration mismatches */}
                <div className="absolute inset-0 bg-stone-200 group-hover:scale-105 transition-transform duration-700" />
                
                {/* The "Footer" Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-white/90 backdrop-blur-sm border-t border-stone-100">
                  <p className="text-sm font-light text-stone-800 italic leading-relaxed">
                    &quot;{post.oneLiner}&quot;
                  </p>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium group-hover:text-accent transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/*Footer */}
      <footer className="py-20 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-accent font-light">
          © 2026 Mahsa Barzegarsakhvidi. Built with care.
        </div>
        
        <div className="flex gap-8">
          <a href="mailto:your-email@example.com" className="text-sm hover:text-foreground transition-colors">Email</a>
          <a href="https://linkedin.com/in/yourname" className="text-sm hover:text-foreground transition-colors">LinkedIn</a>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-accent hover:text-foreground transition-colors italic"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}