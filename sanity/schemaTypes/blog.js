export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "mainImage",
        title: "Main Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "publishedAt",
        title: "Published At",
        type: "datetime",
      },
    ],
  };
  