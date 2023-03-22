import { NextApiRequest, NextApiResponse } from "next";
import { data } from '../../../data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const body = JSON.parse(req.body)
        const newBook = {
            name: body.name,
            image: body.image,
            id: Math.round(Math.random() * (10000 - 1000) + 1000).toString()
        }
        data.push(newBook)
        console.log(newBook)
        res.status(200)
    } else {
        // Manipula cualquier otro método HTTP
    }
}