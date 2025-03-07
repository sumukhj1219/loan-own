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
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Latest Insights</h1>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog._id} className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              {blog.imageUrl && (
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  priority
                />
              )}
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="block mt-2 text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
        </div>
      )}
    </div>
  );
}
