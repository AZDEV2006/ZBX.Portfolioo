import connectmongodb from "@/utils/Connect";
const Mydata = require("@/model/Mydata");
const Portfolio = require("../../model/Portfolio");

export default async function handler(req, res) {
  const { method } = req;

  await connectmongodb()
  switch (method) {
    case 'GET':
      try {
        const result = await Portfolio.find({}) || [];
        res.status(200).json({
          data : result
        })
      } catch (error) {
        
      }
      break;

    case "POST":
        const result = await Portfolio.create({
            Name : req.body.Name,
            Img : req.body.Img,
            Link : req.body.Link,
            Devby : req.body.Devby,
            Date : req.body.Date
        })
        res.status(200).json({
            data : result
          })
      break
    default:
      break;
  }
}
