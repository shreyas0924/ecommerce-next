type ProductDescriptionProps = {
  params: { name: string }
}

export default function ProductDescription({
  params,
}: ProductDescriptionProps) {
  const decodedName = decodeURIComponent(params.name)
  
  return (
    <div>Description : {decodedName ? decodedName : 'No name provided'}</div>
  )
}
