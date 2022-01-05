import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'
import { MeetupDetail } from '../../components/meetups/MeetupDetail'

export default function MeetupDetails(props){
  return (
    <>
      <Head>
        <title>Meetup - {props.meetupData.title}</title>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </>
  )
}

export async function getStaticPaths(){
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ashrk.mongodb.net/meetups?retryWrites=true&w=majority`)
  const db = client.db()

  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
  client.close()

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ashrk.mongodb.net/meetups?retryWrites=true&w=majority`)
  const db = client.db()

  const meetupsCollection = db.collection('meetups')
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  }
}