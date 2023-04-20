import connectmongodb from "@/utils/Connect";
const Mydata = require("@/model/Mydata");

export default async function handler(req, res) {
  const { method } = req;

  await connectmongodb()
  switch (method) {
    case 'GET':
      try {
        const result = await Mydata.find({}) || [];
        res.status(200).json({
          data : result
        })
      } catch (error) {
        
      }
      break;

    case "POST":
      res.json({
        message: "TESTPORTDATAATAAAAA"
      })
      break
    default:
      break;
  }
}
