import Link from 'next/link'

export default function NewsPage(){
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-framework'>
            NextJS is a framework
          </Link>
        </li>
        <li>
          <Link href='/news/something-else'>
            Something else
          </Link>
        </li>
      </ul>
    </>
  )
}