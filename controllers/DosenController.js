import Dosen from "../models/DosenModel.js";

export const getDosen=async(req,res)=>{
    try {
        const response = await Dosen.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDosenById=async(req,res)=>{
    try {
        const response = await Dosen.findOne({
            where :{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createDosen=async(req,res)=>{
    try {
        await Dosen.create(req.body);
        res.status(201).json({msg:"Dosen Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDosen=async(req,res)=>{
    try {
        await User.update(req.body,{
            where :{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Dosen Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDosen=async(req,res)=>{
    try {
        await Dosen.destroy({
            where :{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Dosen Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}