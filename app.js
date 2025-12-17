
const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Error syncing database:', err));
