import { MongoClient } from 'mongodb'

export async function connectToDatabase(){
   const client = await MongoClient.connect('mongodb+srv://blog:UgFdGTWAkGs46vhS@cluster0.vwomhxk.mongodb.net/auth-demo?retryWrites=true&w=majority')
}
return client