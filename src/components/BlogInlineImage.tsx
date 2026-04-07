import Image from 'next/image';
interface BlogInlineImageProps {
  src: string;
  alt: string;
}

const BlogInlineImage = ({ src, alt }: BlogInlineImageProps) => {
  return (
    <div className="not-prose my-8 rounded-xl overflow-hidden bg-secondary relative h-40 md:h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
};

export { BlogInlineImage };
