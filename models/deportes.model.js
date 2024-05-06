import { readFile, writeFile } from 'fs/promises'
import { nanoid } from 'nanoid'
import path from 'path'

const _dirname = import.meta.dirname

const filePath = path.join(_dirname, "../data/deportes.json")

const findAll = async () => {
    const preview = await readFile(filePath, "utf-8")
    const deportes = preview.trim() ? JSON.parse(preview) : []
    return deportes
}

const create = async (nombre, precio) => {
    const preview = await readFile(filePath, "utf-8")
    const deportes = preview.trim() ? JSON.parse(preview) : []
    const newDeporte = {
        id: nanoid(7),
        nombre,
        precio
    }
    deportes.push(newDeporte)
    await writeFile(filePath, JSON.stringify(deportes))
    return newDeporte
}

const update = async (id, nombre, precio) => {
    const preview = await readFile(filePath, "utf-8")
    const deportes = preview.trim() ? JSON.parse(preview) : []

    const deporte = deportes.find(item => item.id === id)
    if (!deporte)
        return "Registro no encontrado"

    deporte.nombre = nombre
    deporte.precio = precio
    await writeFile(filePath, JSON.stringify(deportes))
    return deporte
}

const remove = async (id) => {
    const preview = await readFile(filePath, "utf-8")
    const deportes = preview.trim() ? JSON.parse(preview) : []

    const deporte = deportes.find((item) => item.id === id)
    if (!deporte)
        return "Registro no encontrado"

    const filteredDeportes = deportes.filter(item => item.id !== id)
    await writeFile(filePath, JSON.stringify(filteredDeportes))
    return deporte
}

export const modelDeporte = {
    findAll,
    create,
    update,
    remove
}