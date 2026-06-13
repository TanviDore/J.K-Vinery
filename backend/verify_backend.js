const mongoose = require('mongoose');
const Visitor = require('./models/Visitor');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jkfarm';

async function runVerification() {
  console.log('--- Starting Backend Verification ---');
  console.log('Connecting to database:', MONGODB_URI);
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully.');
    
    // Clear old test data if any
    await Visitor.deleteMany({ name: 'TEST_VISITOR_DELETE_ME' });
    console.log('✅ Cleared old test database entries.');
    
    // Test Visitor Creation
    const testVisitor = new Visitor({
      name: 'TEST_VISITOR_DELETE_ME',
      contactNumber: '1234567890',
      email: 'test@example.com',
      address: 'Test Address, Baglan',
      purposeOfVisit: 'Verification Testing',
      preferredVisitDate: new Date(Date.now() + 86400000) // Tomorrow
    });
    
    const saved = await testVisitor.save();
    console.log('✅ Created visitor in MongoDB successfully.');
    
    // Fetch and check
    const fetched = await Visitor.findOne({ name: 'TEST_VISITOR_DELETE_ME' });
    if (fetched && fetched.contactNumber === '1234567890') {
      console.log('✅ Verified database record matching successfully.');
    } else {
      throw new Error('Database record does not match what was saved.');
    }
    
    // Clean up
    await Visitor.deleteMany({ name: 'TEST_VISITOR_DELETE_ME' });
    console.log('✅ Cleaned up verification database entries.');
    
    console.log('\n🎉 ALL BACKEND CHECKS PASSED SUCCESSFULLY!');
    
  } catch (error) {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from database.');
  }
}

runVerification();
