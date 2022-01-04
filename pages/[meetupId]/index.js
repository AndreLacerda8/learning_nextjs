import { MeetupDetail } from '../../components/meetups/MeetupDetail'

export default function MeetupDetails(){
  return (
    <MeetupDetail
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuY2Si3nXBYTAsDFkpWJw4TewBh1pzcNYXw&usqp=CAU'
      title='First meetup'
      description='This is a first meetup'
      address='Some Street 8, some city'
    />
  )
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuY2Si3nXBYTAsDFkpWJw4TewBh1pzcNYXw&usqp=CAU',
        title:'First meetup',
        description:'This is a first meetup',
        address:'Some Street 8, some city'
      }
    }
  }
}