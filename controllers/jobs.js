const getAlljobs=async (req,res)=>{
    res.send('all jobs')
}


const getjob=async (req,res)=>{
    res.send('a jobs')
}

const createJob=async (req,res)=>{
    res.send('create jobs')
}

const deletejob=async (req,res)=>{
    res.send('delete jobs')
}
const updateJob=async (req,res)=>{
    res.send('update jobs')
}


module.exports={
    getjob,
    getAlljobs,
    createJob,
    deletejob,
    updateJob

}