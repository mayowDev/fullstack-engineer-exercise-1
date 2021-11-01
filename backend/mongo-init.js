db.createUser({
  user: "treeline",
  pwd: "treeline",
  roles: [
    {
      role: "readWrite",
      db: "jshiring",
    },
  ],
});
