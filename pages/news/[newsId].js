import { useRouter } from 'next/router'

export default function DetailPage(){
  const router = useRouter()
  const { newsId } = router.query

  return (
    <h1>Detail Page {newsId}</h1>
  )
}