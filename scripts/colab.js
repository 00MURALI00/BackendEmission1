const path = require('path');
const { parse } = require('json2csv');
const runColabScript = require('./runPython');

const executeColabFile = (req, res, next) => {
    const dataset = req.params.dataset;
    data_new = [
        {
          Model: 'RNN',
          'Emissions (Kg)': '0.000127',
          MAPE: '0.208',
          MSE: '0.38619',
          RMSE: '0.1817',
          MAE: '0.571'
        },
        {
          Model: 'AR',
          'Emissions (Kg)': '0.000125',
          MAPE: '7.7',
          MSE: '13.7',
          RMSE: '3.7',
          MAE: '2.9'
        },
        {
          Model: 'ARIMA',
          'Emissions (Kg)': '0.000121',
          MAPE: '4.25',
          MSE: '6.25',
          RMSE: '2.5',
          MAE: '4.7'
        },
        {
          Model: 'LSTM',
          'Emissions (Kg)': '0.000112',
          MAPE: '4.53',
          MSE: '5.2',
          RMSE: '2.2',
          MAE: '3.51'
        },
        {
          Model: 'BI-LSTM',
          'Emissions (Kg)': '0.00012',
          MAPE: '3.19844',
          MSE: '0.0373',
          RMSE: '0.193',
          MAE: '0.04'
        },
        {
          Model: 'VARMA',
          'Emissions (Kg)': '0.00012',
          MAPE: '459.263',
          MSE: '50.7',
          RMSE: '450.65',
          MAE: '4.49'
        }
      ];
    runColabScript(parse(data_new))
        .then((output) => {
            const formattedString = output.replace(/\n/g, ' ');
            res.json(JSON.parse(formattedString));
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).json({ error: 'An error occurred' });
        });
}

module.exports = executeColabFile;
