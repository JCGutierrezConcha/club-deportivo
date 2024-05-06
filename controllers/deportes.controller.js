import { modelDeporte } from "../models/deportes.model.js"

export const getAllDeportes = async (req, res) => {
    try {
        const deportes = await modelDeporte.findAll()
        return res.json({ deportes })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const createDeporte = async (req, res) => {
    try {
        const { nombre, precio } = req.body
        const newDeporte = await modelDeporte.create(nombre, precio)
        return res.json(newDeporte)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }

}

export const updateDeporte = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, precio } = req.body
        const deporte = await modelDeporte.update(id, nombre, precio)
        return res.json({ deporte })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const removeDeporte = async (req, res) => {
    try {
        const { id } = req.params
        const deporte = await modelDeporte.remove(id)
        return res.json({ deporte })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}