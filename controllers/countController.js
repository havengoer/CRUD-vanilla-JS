const Count = require('../models/counter');

const countController = {

    getCount: (req, res) => {
        // retrieves the count from db
        // use mongo find method and return to the client

        Count.find({})
        .then (result => {
            return res.json(result[0]);
        })
        .catch(err => {
            if(err) console.error(err);
        });
      
    },
    increaseCounter: (req, res) => {
        console.log('here at increaseCouter')
        Count.find({}, (err, counter) => {
            console.log('@find')
            if (err) return console.error('This is what\'s wrong', err);
            if (counter.length === 0){
                console.log(counter);
                Count.create({count: 1})
                .then((result) => res.json(result))
                .catch((err) => console.error(err))
 
            } else {
                counter[0].count += 1;
                counter[0].save()
                .then((result) => res.json(result))
                .catch((err) => console.error(err))
            }
        })
    }
};

module.exports = countController;