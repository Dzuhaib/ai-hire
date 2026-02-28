interface BlogInlineImageProps {
  src: string;
  alt: string;
}

const BlogInlineImage = ({ src, alt }: BlogInlineImageProps) => {
  return (
    <div className="not-prose my-8 rounded-xl overflow-hidden bg-secondary">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-40 md:h-48 object-cover"
      />
    </div>
  );
};

export { BlogInlineImage };
