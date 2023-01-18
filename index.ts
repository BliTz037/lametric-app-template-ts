import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const main = async () => {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    app.use(cors());

    app.use((req, res) => {
        res.status(404).json({ message: "Route not found !" })
    })

    app.listen(port, () => console.log(`Lametric App server started on: ${port}`));
}

main();