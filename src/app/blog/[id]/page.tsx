import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${id}.mdx`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // Read the file and parse the metadata (frontmatter)
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <article className="max-w-2xl mx-auto pt-20 pb-32">
      <Link href="/" className="text-sm text-accent hover:text-foreground transition-colors mb-12 inline-block">
        ← Back to Portfolio
      </Link>

      <header className="space-y-4 mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{data.date}</p>
        <h1 className="font-serif text-5xl leading-tight">{data.title}</h1>
      </header>
      
      {/* This renders your Markdown into HTML */}
      <div className="prose prose-stone lg:prose-lg font-light leading-relaxed text-stone-800">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}