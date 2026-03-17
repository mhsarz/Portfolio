import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto pt-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <header className="space-y-4 mb-12">
        <p className="text-xs uppercase tracking-widest text-accent">{post.date}</p>
        <h1 className="font-serif text-4xl md:text-5xl">{post.title}</h1>
      </header>
      
      <div className="prose prose-stone lg:prose-lg font-light leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}