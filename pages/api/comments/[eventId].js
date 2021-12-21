import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://Allusy:C2OIt0YDA1XSOilw@cluster0.luxax.mongodb.net/comments?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });

      return;
    }
    
    const newComment = {
      email,
      name,
      text,
      eventId
    };

    const db = client.db()

   const result =  await db.collection('comments').insertOne(newComment);
   
   newComment.id =  result.insertedId

    res.status(201).json({ message: "Signed up!" });
  }

  if (req.method === "GET") {
   
    const db = client.db();
    const documents = await db.collection('comments').find().sort({_id: -1}).toArray();

    res.status(200).json({ comments: documents });
  }
  client.close()
}

export default handler;
