import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const query = `*[_type == "blog" || _type == "event"]{slug}`;
  const items = await client.fetch(query);
  return items.map((item) => ({ id: item.slug.current }));
}

async function getItem(id) {
  try {
    const query = `*[_type in ["blog", "event"] && slug.current == $id][0]{
      title, 
      description, 
      content,
      "imageUrl": mainImage.asset->url
    }`;
    return await client.fetch(query, { id });
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
}

export default async function DetailPage({ params }) {
  const item = await getItem(params.id);

  if (!item) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Content not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="max-w-4xl mx-auto p-6 sm:p-8 border border-gray-200 shadow-md">
        {item.imageUrl && (
          <div className="mb-6">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={900}
              height={450}
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-md"
              priority
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-6 border-t border-gray-300 pt-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              {item.description}
            </p>
          </div>
          <div className="mt-6 text-gray-800 text-sm sm:text-base leading-relaxed">
            <PortableText value={item.content} />
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/blog">← Back to Listings</Link>
        </Button>
      </div>
    </div>
  );
}