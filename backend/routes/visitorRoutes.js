const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// @route   POST /api/visitors
// @desc    Create a new visitor request
// @access  Public
router.post('/visitors', async (req, res) => {
  try {
    const { name, contactNumber, email, address, purposeOfVisit, preferredVisitDate } = req.body;

    // Backend validation
    if (!name || !contactNumber || !address || !purposeOfVisit || !preferredVisitDate) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, contact number, address, purpose of visit, and preferred visit date.'
      });
    }

    const newVisitor = new Visitor({
      name,
      contactNumber,
      email: email || '',
      address,
      purposeOfVisit,
      preferredVisitDate: new Date(preferredVisitDate)
    });

    const savedVisitor = await newVisitor.save();
    return res.status(201).json({
      success: true,
      message: 'Visit request submitted successfully!',
      data: savedVisitor
    });
  } catch (error) {
    console.error('Error saving visitor request:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit request. Please try again later.',
      error: error.message
    });
  }
});

// @route   GET /api/visitors
// @desc    Get all visitor requests
// @access  Admin (Hidden page verification)
router.get('/visitors', async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: visitors.length,
      data: visitors
    });
  } catch (error) {
    console.error('Error fetching visitor requests:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch visitor requests.',
      error: error.message
    });
  }
});

module.exports = router;
