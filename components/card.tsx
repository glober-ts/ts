import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export function Card({ title, description, image }: CardProps) {
  return (
    <article className="overflow-hidden border border-border bg-base">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-serif text-xl text-text">{title}</h3>
        <p className="text-sm leading-relaxed text-text/75">{description}</p>
      </div>
    </article>
  );
}
