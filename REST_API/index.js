const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

const users = require("./MOCK_DATA.json");
const { error } = require("console");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/users", (req, res) => {
  const html = `<ul> ${users
    .map((user) => `<li> ${user.first_name}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

// /api/users/ : for mobile applications, react application
app
  .route("/api/users")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
      return res.status(404).json({ msg: 'All Fields are required :)' });
    }
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      console.log(err);
    });
    return res.json(body);
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    res.setHeader('X-purpose', 'Learning Headers')
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ msg: 'No User Found' });
    }

    return res.json(user);
  })
  .put((req, res) => {
    const id = req.params.id;
    const body = req.body
    const index = users.findIndex(user => user.id == id);
    const updatedUser = ({ id: Number(id), ...body })

    if (index !== -1) {
      users[index] = updatedUser;
    }

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      console.log(err);
    });

    return res.send(updatedUser);
  })
  .delete((req, res) => {
    return res.json("Status Pending");
  })

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
