type ProductDescriptionProps = {
  params: { slug: string }
}

export default function ProductDescription({
  params,
}: ProductDescriptionProps) {
  return <div>My Post: {params.slug}</div>
}
