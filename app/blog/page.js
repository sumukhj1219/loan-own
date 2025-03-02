import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const revalidate = 60; 

async function getBlogs() {
  try {
    const query = `*[_type == "blog"]{
      _id, 
      title, 
      slug, 
      description, 
      "imageUrl": mainImage.asset->url
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 underline">Our Latest Blogs</h1>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog._id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {blog.imageUrl && (
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover"
                  priority
                />
              )}
              <CardHeader>
                <CardTitle className="text-xl">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{blog.description}</p>
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="mt-3 inline-block text-blue-600 hover:underline"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">No blogs found.</p>
        </div>
      )}
    </div>
  );
}
