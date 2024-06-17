import express from "express";
import cors from "cors";
import dotenv from "dotenv";

let events = [
  {
    id: 1,
    title: "Football Match",
    date: "2024-07-01T18:00",
    description: "Local football match.",
    type: "Sport",
    phone: "123456789",
    email: "contact@example.com",
    location: "Stadium",
  },
  {
    id: 2,
    title: "Concert",
    date: "2024-08-05T20:00",
    description: "Outdoor concert in the park.",
    type: "Music",
    phone: "987654321",
    email: "music@example.com",
    location: "Central Park",
  },
  {
    id: 3,
    title: "Art Exhibition",
    date: "2024-09-15T10:00",
    description: "Exhibition of modern art.",
    type: "Art",
    phone: "234567890",
    email: "art@example.com",
    location: "Art Gallery",
  },
  {
    id: 4,
    title: "Marathon",
    date: "2024-10-10T07:00",
    description: "Annual city marathon.",
    type: "Sport",
    phone: "345678901",
    email: "marathon@example.com",
    location: "City Center",
  },
  {
    id: 5,
    title: "Theater Play",
    date: "2024-11-20T19:00",
    description: "Classic play performance.",
    type: "Theater",
    phone: "456789012",
    email: "theater@example.com",
    location: "Main Theater",
  },
  {
    id: 6,
    title: "Food Festival",
    date: "2024-12-01T12:00",
    description: "Local food festival with various cuisines.",
    type: "Food",
    phone: "567890123",
    email: "food@example.com",
    location: "Downtown",
  },
  {
    id: 7,
    title: "Tech Conference",
    date: "2025-01-15T09:00",
    description: "Conference on the latest tech trends.",
    type: "Conference",
    phone: "678901234",
    email: "tech@example.com",
    location: "Convention Center",
  },
  {
    id: 8,
    title: "Charity Run",
    date: "2025-02-20T08:00",
    description: "Run for a charity cause.",
    type: "Charity",
    phone: "789012345",
    email: "charity@example.com",
    location: "City Park",
  },
  {
    id: 9,
    title: "Science Fair",
    date: "2025-03-10T10:00",
    description: "Annual science fair for students.",
    type: "Education",
    phone: "890123456",
    email: "science@example.com",
    location: "Exhibition Hall",
  },
  {
    id: 10,
    title: "Book Fair",
    date: "2025-04-05T09:00",
    description: "Fair showcasing books from various genres.",
    type: "Literature",
    phone: "901234567",
    email: "books@example.com",
    location: "Library",
  },
];

let nextEventId = events.length + 1;
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/events/:id", (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find((event) => event.id === eventId);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

app.post("/api/events", (req, res) => {
  const newEvent = {
    id: nextEventId++,
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    type: req.body.type,
    phone: req.body.phone,
    email: req.body.email,
    location: req.body.location,
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
});

app.put("/api/events/:id", (req, res) => {
  const eventId = parseInt(req.params.id);
  const updatedEvent = req.body;

  events = events.map((event) => {
    if (event.id === eventId) {
      return updatedEvent;
    }
    return event;
  });

  res.json({ message: "Event updated successfully" });
});

app.delete("/api/events/:id", (req, res) => {
  const eventId = parseInt(req.params.id);

  events = events.filter((event) => event.id !== eventId);

  res.json({ message: "Event deleted successfully" });
});

app.listen(process.env.REACT_APP_SERVER_MOCK_PORT, () => {
  console.log(
    `Mock server running on http://localhost:${process.env.REACT_APP_SERVER_MOCK_PORT}`
  );
});