const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
//const csv = require("csv-parser");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "tmp/csv/" });
//const csv = require('fast-csv')
const csv = require("csvtojson");
const morgan = require("morgan");
const _ = require("lodash");

const fileModel = require("./models/file");
const app = express();
const EE = require("./models/e");

const config = require("./config");
const mongoose = require("mongoose");
// connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 9000;

app.listen(config.PORT, () => {
  mongoose.connect(config.MONGOB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`app is listening on port ${config.PORT}`);
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => {
  app.post("/upload", upload.single("file"),  function (req, res) {
    console.log(req.body.type);
    let datas;
    csv()
      .fromFile(req.file.path)
      .then((data) => {
data.forEach(async(e)=>{

  const cases = new EE({

    ID:e.ID,
     age:  e.age,
     sex:  e.sex,
     city : e.city,
     province:  e.province,
     country:  e.country,
     latitude:    e.latitude,
     longitude:   e.longitude,
     geo_resolution:    e.geo_resolution,
     date_onset_symptoms:   e.date_onset_symptoms,
     date_admission_hospital: e.date_admission_hospital,
     date_confirmation:   e.date_confirmation,
     symptoms:   e.symptoms,
     lives_in_Wuhan:    e.lives_in_Wuhan,
     travel_history_dates:  e.travel_history_dates,
     travel_history_location:   e.travel_history_location,
     reported_market_exposure:  e.reported_market_exposure,
     additional_information:   e.additional_information,
     chronic_disease_binary:  e.chronic_disease_binary,
     chronic_disease:     e.chronic_disease,
     source:  e.source,
     sequence_available:  e.sequence_available,
     outcome:  e.outcome,
     date_death_or_discharge:     e.date_death_or_discharge,
     notes_for_discussion:    e.notes_for_discussion,
     location:   e.location,
     admin3:   e.admin3,
     admin2:   e.admin2,
     admin1:  e.admin1,
     country_new:  e.country_new,
     admin_id:    e.admin_id,
     data_moderator_initials:        e.data_moderator_initials,
     field34:  e.field34,
     field35:      e.field35,
     field36:   e.field36,
     field37:     e.field37,
     field38: e.field38,
     field39:       e.field39,
     field40:    e.field40,
     field41:  e.field41,
     field42:     e.field42,
     field43: e.field43,
     field44:e.field44,
     field45:  e.field45

   })

   try{
    const result =   await  cases.save();
    res.send('ok')
       }
       catch(err){
         console.error(err);
       }
;

})
   
      // data.forEach((e) => {
        //   const cases = new EE({
        //     ID,
        //     age,
        //     sex,
        //     city,
        //     province,
        //     country,
        //     latitude,
        //     longitude,
        //     geo_resolution,
        //     date_onset_symptoms,
        //     date_admission_hospital,
        //     date_confirmation,
        //     symptoms,
        //     lives_in_Wuhan,
        //     travel_history_dates,
        //     travel_history_location,
        //     reported_market_exposure,
        //     additional_information,
        //     chronic_disease_binary,
        //     chronic_disease,
        //     source,
        //     sequence_available,
        //     outcome,
        //     date_death_or_discharge,
        //     notes_for_discussion,
        //     location,
        //     admin3,
        //     admin2,
        //     admin1,
        //     country_new,
        //     admin_id,
        //     data_moderator_initials,
        //     field34,
        //     field35,
        //     field36,
        //     field37,
        //     field38,
        //     field39,
        //     field40,
        //     field41,
        //     field42,
        //     field43,
        //     field44,
        //     field45,
        //   });
        // });

      
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/case", async function (req, res) {
    console.log('res')
try{
  const e = await EE.find().limit(50);

  res.send(e);

}catch(err){
 console.log(err);
}
  });
});
