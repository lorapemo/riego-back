const { json } = require('express');
const pool = require('../db')

const getAllLogsInDate = async (req, res, next) => {
    const { fecha } = req.params 
    try{
        const result = await pool.query( 'SELECT * from "log" where fecha = $1', [fecha])
        res.send(result)
        console.log(result)
    } catch (error) {
        next(error)
    }
}
const getLogInDateRange = async (req, res, next) =>{
    const { fechaS, fechaF } = req.params 
    try{
        const result = await pool.query( 'Select * from log where fecha between $1 and $2', [fechaS, fechaF])
        res.send(result)
        console.log(result)
    } catch (error) {
        next(error)
    }
}
const postALog = async (req, res,next) => {
    const { temperatura_tanque, nivel_tanque, nivel_humedad, temperatura_ambiente, fue_riego } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO log Values (DEFAULT, to_date(to_char(NOW()::date,'DD-MM-YYYY'), 'DD-MM-YYYY'), TO_CHAR(NOW() :: TIME, 'hh:mi'), $1, $2, $3, $4, $5)",
            [ temperatura_tanque, temperatura_ambiente, nivel_humedad, nivel_tanque, fue_riego]
        );
    } catch (error) {
        next(error)
    }
    res.send('Creating a log');
}


module.exports = {
    getAllLogsInDate: getAllLogsInDate,
    postALog: postALog,
    getLogInDateRange: getLogInDateRange
}