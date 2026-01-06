import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let Post;
  try {
    const module = await import(`@/content/blog/${slug}.mdx`);
    Post = module.default;
  } catch {
    notFound();
  }

  return (
    <article className="prose mx-auto py-20 px-4 lg:prose-xl">
      <Post />
    </article>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "anonymize-data-for-ai-models" },
    { slug: "gdpr-ai-compliance" },
    { slug: "preventing-data-leaks-ai" },
  ];
}
