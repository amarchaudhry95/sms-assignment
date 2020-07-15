import axios from 'axios';

export default {
  getAll: async (startDate, endDate) => {
    let startDateUrl = "";
    let endDateUrl = "";
    if(startDate != null){
      let month = (startDate.getMonth() + 1);
      let day = startDate.getDate();
      startDate = startDate.getFullYear() + '-' + (month < 10 ? "0"+month : month)  + '-' + (day < 10 ? "0" + day : day);
      startDateUrl = 'startDate=' + startDate;
    }
    if(endDate != null){
      let month = (endDate.getMonth() + 1);
      let day = endDate.getDate();
      endDate = endDate.getFullYear() + '-' + (month < 10 ? "0"+month : month) + '-' + (day < 10 ? "0" + day : day);
      endDateUrl = '&endDate=' + endDate;
    }
    console.log(startDate);
    console.log(endDate);
    let res = await axios.get('/api/data?' + startDateUrl + endDateUrl);    
    return res.data || [];
  }
}