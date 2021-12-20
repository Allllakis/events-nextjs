function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { text, name, email } = req.body;

    if (
      !email.includes("@") ||
      !name.trim() === "" ||
      !name ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!!" });
      return;
    }

    console.log(text)
    const newComment = {
        id: new.Date().toISOString(),
        email,
        name,
        text
    }
    res.status(201).json({ message: "Get your comment!" , comment: newComment});
  }

  if(req.method === 'GET') {
      const dummyComments = [
          {id: c1, name: 'Alla', text: 'First comments'},
          {id: c2, name: 'Alex', text: 'Second comments'}
      ];
      res.status(201).json({ comments: dummyComments});
      }
  }


export default handler;
