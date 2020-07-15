const mongoose = require('mongoose');
const DataCollection = mongoose.model('collection1');

module.exports = (app) => {

  app.get('/api/data', async (req, res) => {
	  
	let searchObj = {};  
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;

	if(startDate && endDate){
		searchObj = {"start_date" : {$gte: startDate}, "end_date" : {$lte: endDate} };
	}else if(!startDate && endDate){
		searchObj = {"end_date": {$lte: endDate}};
	}else if(startDate && !endDate){
		searchObj = {"start_date": {$gte: startDate}};
	}else{		
	}

    let dataList = await DataCollection.find(searchObj);
    return res.status(200).send(dataList);
  });

}