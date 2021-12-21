import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

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
    const client = await MongoClient.connect(
      "mongodb+srv://Allusy:C2OIt0YDA1XSOilw@cluster0.luxax.mongodb.net/events?retryWrites=true&w=majority"
    );
    const newComment = {
      email,
      name,
      text,
      eventId
    };

    const db = client.db()

    const resalt = await db.collection("comments").insertOne(newComment);
    console.log(resalt)

    res.status(201).json({ message: "Signed up!" });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Alla", text: "First Comment" },
      { id: "c2", name: "Alex", text: "Second Comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
  client.close()
}

export default handler;
