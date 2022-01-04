import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuY2Si3nXBYTAsDFkpWJw4TewBh1pzcNYXw&usqp=CAU',
    address: 'Some address 5, 123 some city',
    description: 'this is a first meetup'
  },
  {
    id: 'm2',
    title: 'A second Meetup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG4rU6PTybJGkJQ90iLxJFwwsTYf8A6dWBA&usqp=CAU',
    address: 'other address 58, 1890 some city',
    description: 'this is a second meetup'
  }
]

export default function HomePage(props){
  return (
    <MeetupList meetups={props.meetups} />
  )
}

// export async function getServerSideProps(context){
//   const req = context.req
//   const res = context.res
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(){
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}