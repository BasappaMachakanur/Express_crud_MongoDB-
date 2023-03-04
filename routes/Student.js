const Router=require("express");
const {getStudents,postStudents,getStudent,deleteStudent,editStudents}=require("../controllers/student");


let router=Router();
//==================Router getMethods Start=======================//

router.route("/getStudents").get(getStudents);

router.route("/getStudent/:id").get(getStudent);

//==================Router getMethods Ends=======================//

//==================Router postMethods starts=======================//

router.route("/addStudents").post(postStudents);

//==================Router postMethods Ends=======================//

//==================Router put Methods starts=====================//
router.route('/editStudent/:id').put(editStudents)
//==================Router put Methods Ends=======================//

//==================Delete Methods=================================//
// router.route("/deleteStudent/:id").delete(deleteStudent)

router.route('/delete/:id').delete(deleteStudent)
    

/*===========================Router Ends===================*/

module.exports=router;






