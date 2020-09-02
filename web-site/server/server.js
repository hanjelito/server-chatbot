require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');


//midlware
app.use(bodyParser.urlencoded({ extends: false }));

app.use(bodyParser.json());
//

app.post('/usuario', function(req, res) {
    console.log(req);
    let body = req.body;
    returnString = '';

    airline = body.airline;
    flightNum = body.flightNumber;
    fullQual = airline + flightNum;

    if (body.airline === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Acceso denegado'
        });
    } else {
        switch (fullQual) {
            case 'AA456':
                returnString = 'AA456 is 10 minutes ahead of schedule.';
                break;
            case 'AA123':
                returnString = 'AA123 is on time.';
                break;
            case 'DL123':
                returnString = 'DL123 is on time.';
                break;
            case 'UA789':
                returnString = 'UA789 is 5 minutes behind schedule.';
                break;
            default:
                returnString = '**An error has occured.**';
        }
        let finalString = " --> " + returnString + " <-- ";
        res.json({
            message: finalString
        });
    }
});


app.get('/usuario', function(req, res) {
    console.log(req);
    let body = req.body;
    returnString = '';

    airline = body.airline;
    flightNum = body.flightNumber;
    fullQual = airline + flightNum;

    if (body.airline === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Acceso denegado'
        });
    } else {
        switch (fullQual) {
            case 'AA456':
                returnString = 'AA456 is 10 minutes ahead of schedule.';
                break;
            case 'AA123':
                returnString = 'AA123 is on time.';
                break;
            case 'DL123':
                returnString = 'DL123 is on time.';
                break;
            case 'UA789':
                returnString = 'UA789 is 5 minutes behind schedule.';
                break;
            default:
                returnString = '**An error has occured.**';
        }
        let finalString = " --> " + returnString + " <-- ";
        res.json({
            message: finalString
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', function(req, res) {
    res.json('delete usaurio');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});

function manti(res) {
    returnString = '';

    airline = res.airline;
    flightNum = res.flightNumber;
    fullQual = airline + flightNum;

    // This section could be an API call, database call, etc.
    switch (fullQual) {
        case 'AA456':
            returnString = 'AA456 is 10 minutes ahead of schedule.';
            break;
        case 'AA123':
            returnString = 'AA123 is on time.';
            break;
        case 'DL123':
            returnString = 'DL123 is on time.';
            break;
        case 'UA789':
            returnString = 'UA789 is 5 minutes behind schedule.';
            break;
        default:
            returnString = '**An error has occured.**';
    }
    //

    let finalString = " --> " + returnString + " <-- ";
    return { message: finalString };
}