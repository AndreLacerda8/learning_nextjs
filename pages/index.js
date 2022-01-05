import Head from 'next/head'
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

export default function HomePage(props){
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name='description' content='Browse a huge list of highly active meetups' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps(){
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ashrk.mongodb.net/meetups?retryWrites=true&w=majority`)
  const db = client.db()

  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image
      }))
    },
    revalidate: 60
  }
}