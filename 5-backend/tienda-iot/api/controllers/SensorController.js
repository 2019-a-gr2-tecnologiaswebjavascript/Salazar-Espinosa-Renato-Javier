/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    encenderLed: (req, res) => {

        const parametros = req.allParams();
        if (parametros.idLed) {

            console.los('encender led #', parametros.idLed);

            return res.ok({
                mensaje: `Led ${parametros.idLed}encendido`
            });

        } else {

            return res.badError({
                error: 400,
                mensaje: 'NO envia IDLED'
            });

        }
    }

};