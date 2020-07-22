const mongoose = require('mongoose');


const E= new mongoose.Schema({
    ID: {
    type: String,
  
  
  },
  age: {
    type: String,
  
 
  },
  sex: {
    type: String,
  
  },
  city: {
    type: String,
  
  },
  province:{
    type: String,
  
  },
  country: {
    type: String,
  
  },
  latitude:{
    type: String,
  
  },
  longitude:{
    type: String,
  
  },
  geo_resolution:{
    type: String,
  
  },
  date_onset_symptoms: {
    type: String,
  
  },
  date_admission_hospital: {
    type: String,
  
  },
  date_confirmation:{
    type: String,
  
  },
  symptoms: {
    type: String,
  
  },
  lives_in_Wuhan: {
    type: String,
  
  },
  travel_history_dates: {
    type: String,
  
  },
  travel_history_location: {
    type: String,
  
  },
  reported_market_exposure: {
    type: String,
  
  },
  additional_information: {
    type: String,
  
  },
  chronic_disease_binary: {
    type: String,
  
  },
  chronic_disease: {
    type: String,
  
  },
  source: {
    type: String,
  
  },
  sequence_available: {
    type: String,
  
  },
  outcome: {
    type: String,
  
  },
  date_death_or_discharge: {
    type: String,
  
  },
  notes_for_discussion: {
    type: String,
  
  },
  location: {
    type: String,
  
  },
  admin3:{
    type: String,
  
  },
  admin2: {
    type: String,
  
  },
  admin1: {
    type: String,
  
  },
  country_new: {
    type: String,
  
  },
  admin_id: {
    type: String,
  
  },
  data_moderator_initials: {
    type: String,
  
  },
  field34: {
    type: String,
  
  },
  field35:{
    type: String,
  
  },
  field36: {
    type: String,
  
  },
  field37: {
    type: String,
  
  },
  field38: {
    type: String,
  
  },
  field39: {
    type: String,
  
  },
  field40:{
    type: String,
  
  },
  field41: {
    type: String,
  
  },
  field42: {
    type: String,
  
  },
  field43: {
    type: String,
  
  },
  field44: {
    type: String,
  
  },
  field45: {
    type: String,
  
  },
 

});


const EE = mongoose.model('EE', E);
module.exports = EE;