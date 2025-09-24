const Task = require('../models/Tasks');
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.fine({ user: req.user._id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: 'Plese add a title' });
    try {
        const task = await Task.findById(res.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, json({ message: 'Not authorized' }));
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteTask = async (req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({message:'Task not found'});
        if(task.user.toString()!== req.user._id.toString()) return res.status(401).json({message:"Not authorized"});
        await Task.deleteOne({_id:req.params.id})
        res.status(200).json({message:'Task removed'})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}