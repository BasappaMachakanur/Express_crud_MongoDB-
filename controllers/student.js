const Student = require("../Model/StudentAuth");


/* HTTP Get request
 @Access Public
 @URL api/students */

exports.getStudents = (req, res) => {
   Student.find().lean().then(students => {
      res.send(students)
   })
}


/* HTTP Get request
 @Access Public
 @URL api/students*/
exports.getStudent = (req, res) => {
   Student.findById({ _id: req.params.id }).lean().then(students => {
      res.send(students)
   })
}

// ====================post method function======================//

/* HTTP post request
 @Access Public
 @URL api/students */

exports.postStudents = async (req, res) => {
   let payload = req.body;
   console.log(payload);
   try {
      const std = await Student.create(payload);
      console.log('stored');
      res.send(std);
   } catch (err) {
      res.send({ msg: "Not stored in DB" });
   }
}



// ====================post method function Ends======================//

// ====================put method function======================//
exports.editStudents = async (req, res) => {
  try {
      let id = req.params.id
      Student.findByIdAndUpdate(id, {
         username: req.body.username,
         email: req.body.email,
         role: req.body.role,
      }).then(_ => {
         res.send("student edit successfully")
      })

   } catch (error) {
      res.status(400).json({ message: error.message })
   }
}

// ====================put method function======================//

// ====================Delete method function starts======================//

exports.deleteStudent = async (req, res) => {
   console.log(req.params.id)
   try {
      const id = req.params.id;
      await Student.deleteOne(id)
      res.send(`Student deleted successfully`)
   }
   catch (error) {
      res.status(400).json({ message: error.message })
   }
}

// ====================Delete method function Ends======================//