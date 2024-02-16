const mongoose = require("mongoose");
//mongo db connection url 
mongoose.connect("mongodb+srv://vikkymsd777:TAm6HPFXUd4FIJig@cluster0.xpoedji.mongodb.net/mongo-agg")
  .then(async() => {
    const User = mongoose.model('users', {
      name: String,
      age: Number,
      country: String
    });

  let result1= await User.aggregate([
        {
          $group: {
            _id: null, 
            totalUsers: { $sum: 1 },
            averageAge: { $avg: "$age" } 
          }
        }
      ]);
      console.log("result: ",result1);
    let result2= await User.aggregate([
        {
          $group: {
            _id: "$country", // Group all documents together
            totalUsers: { $sum: 1 }, // Count total number of documents
          }
        }
      ]);
      console.log("result2: ",result2);
  });
  

