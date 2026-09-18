import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>{slug}</h1>
    </main>
  );
}