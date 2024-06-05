const { DataTypes } = require('sequelize');
const sequelize = require('../database/Connection');

const ClientEnquiry = sequelize.define('ClientEnquiry', {
  clientCompanyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerContactNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientCompanyContactPersonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientCompanyContactPersonContactNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientCompanyEmailID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visitEnquiryType: {
    type: DataTypes.ENUM('New', 'Repeat'),
    allowNull: false,
  },
  existingCustomer : {
    type : DataTypes.BOOLEAN,
    allowNull : false
  },
  customerSegment: { // review
    type: DataTypes.STRING,
    allowNull: false,
  },
  volvoMachineModelPrimaryEnquiry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  volvoMachineModelSecondaryEnquiry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  competitorBrand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  leadReceivedFromPersonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  leadReceivedFromPersonContactNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerAreaColony: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  travelDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  travelStartKmsReading: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  travelEndKmsReading: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalTravelKms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalTravelTime: { // review
    type: DataTypes.STRING,
    allowNull: false,
  },
  travelMode: {
    type: DataTypes.ENUM('Car', 'Bike', 'Bus', 'Cab'),
    allowNull: false,
  },
  meetingStartTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  meetingEndTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  reasonOfVisit: { // review
    type: DataTypes.ENUM('Training', '1st Enquiry Meet',
      '2nd Enquiry Meet',
      'Financer Meet',
      'Sales Negotiation',
      'Sales Closure'),
    allowNull: false,
  },
  didSalesRepEducateCustomer: { // review
    type: DataTypes.STRING,
    allowNull: false,
  },
  meetingHeldWith: {
    type: DataTypes.ENUM('Owner', 'Business Head / Manager', 'Individual Buyer', 'Called for 2nd Meeting', 'No Meeting with Substantial person'),
    allowNull: false,
  },
  esdeeExecutiveAccompaniedBy: {
    type: DataTypes.ENUM('Management', 'Business Head', 'Sales Head', 'Service Head', 'Team Member', 'None'),
    allowNull: false,
  },
  overnightStay: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  overnightStayApprovalTaken: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  finalOutcome: {
    type: DataTypes.ENUM('Prospect (Successful)', 'No Prospect'),
    allowNull: false,
  },
  finalOutcomeIfDealSuccessful: { // review
    type: DataTypes.STRING,
    allowNull: true,
  },
  expectedPOReleaseMonth :{
    type : DataTypes.STRING,
    allowNull : false
  },
  customerFeedback: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remarksBySalesExecutive: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nextVisitPlanDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  leadType: {
    type: DataTypes.ENUM('Hot - PO Collected', 'Hot - Token Amount', 'Hot - Financier Decided', 'Hot - Price Finalize', 'Hot - Lead won/lost within 30 Days', 'Warm - Lead won/lost within 30 to 60 Days', 'Cold - Lead won/lost within 60 to 90 Days'),
    allowNull: false,
  },
  finalOutcomeWonLost: {
    type: DataTypes.ENUM('Won', 'Lost', 'Abandoned'),
    allowNull: true,
  },
  salesAmountIfDealFinalized: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
}, {
  tableName: 'client_enquiries',
});

module.exports = ClientEnquiry;
