const router = require("express").Router();

const feedback = require("../model/feedback");

//ADD FEEDBACK
router.post("/addfeedback", async (req, res) => {
  const newFeedback = new feedback({
    feedbackId: req.body.feedbackId,
    email: req.body.email,
    satisfaction_rate: req.body.satisfaction_rate,
    message: req.body.message,
  });
  let code = 1;
  try {
    const fbcount = await feedback.find().sort({ _id: -1 }).limit(1);
    if (fbcount.length > 0) code += fbcount[0].code;
    newFeedback.feedbackId = "FB" + code;
    newFeedback.code = code;
    try {
      const savedFeedback = await newFeedback.save();
      res.status(200).json(savedFeedback);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error);
  }
});
// router.post("/addfeedback", async (req, res) => {
//     const newFeedback = new feedback({
//       feedbackId: req.body.feedbackId,
//       email: req.body.email,
//       satisfaction_rate: req.body.satisfaction_rate,
//       message: req.body.message,
//     });
//     let code = 1;
//     try {
//       const fbcount = await feedback.find().sort({ _id: -1 }).limit(1);
//       if (fbcount.length > 0) code += fbcount[0].code;
//       newFeedback.feedbackId = "FB" + code;
//       newFeedback.code = code;
//       try {
//         const savedFeedback = await newFeedback.save();
//         res.status(200).json(savedFeedback);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });

//UPDATE FEEDBACK
router.put("/updatefeedback/:id", async (req, res) => {
  try {
    // console.log("123");
    await feedback.findOneAndUpdate(
      { feedbackId: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json("Feedback updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE FEEDBACK
router.delete("/deletefeedback/:id", async (req, res) => {
  try {
    await feedback.findOneAndDelete({ feedbackId: req.params.id });
    res.status(200).json("Feedback has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK
router.get("/:id", async (req, res) => {
  try {
    const feedbacks = await feedback.findOne({ feedbackId: req.params.id });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const feedbacks = await feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
