const { specialtiesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getSpecialities = async (req, res) => {
  try {
    const data = await specialtiesModel.find({});
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error_get_items")
  }
}

/**
 *  Obtener un detalle!
 * @param {*} req 
 * @param {*} res 
 */
const getSpecialitiesById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await specialtiesModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id especialidad")

  }
}

/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

const createSpecialities = async (req, res) => {
  try {

    const body = matchedData(req)
    const data = await specialtiesModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error creando al usuario")
  }
}
/**
 * Borrar un uruario!
 * @param {*} req 
 * @param {*} res 
 */
const deleteSpecialities = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await specialtiesModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando usuario")
  }
}

/**
 *  actualizar un usuario!
 * @param {*} req 
 * @param {*} res 
 */
const editSpecialities = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    // console.log(body, bodyClean);
    const data = await usersModel.findOneAndUpdate(
      id, body
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando al usuario")
  }
}



module.exports = { getSpecialities, createSpecialities, getSpecialitiesById, deleteSpecialities, editSpecialities }