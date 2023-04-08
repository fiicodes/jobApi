const express=require('express')
const router=express.Router()

const { getjob,getAlljobs,createJob,deletejob,updateJob}=require('../controllers/jobs')


router.route('/').post(createJob).get(getAlljobs)
router.route('/:id').get(getjob).patch(updateJob).delete(deletejob)


module.exports=router