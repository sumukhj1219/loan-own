import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const query = `*[_type == "blog"]{slug}`;
  const blogs = await client.fetch(query);
  return blogs.map((blog) => ({ id: blog.slug.current }));
}

async function getBlog(id) {
  try {
    const query = `*[_type == "blog" && slug.current == $id][0]{
      title, 
      description, 
      "imageUrl": mainImage.asset->url
    }`;
    return await client.fetch(query, { id });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export default async function BlogDetail({ params }) {
  const blog = await getBlog(await params.id);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <Card className="max-w-3xl mx-auto p-6">
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
            priority
          />
        )}
        <CardHeader>
          <CardTitle className="text-3xl">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-lg">{blog.description}</p>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Button asChild variant="outline">
          <Link href="/blog">← Back to Blogs</Link>
        </Button>
      </div>
    </div>
  );
}
