const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createReferral = async (req, res) => {
  const { name, email, referralId } = req.body;

  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: {
        name,
        email,
        referralId,
      },
    });

    res.status(201).json({ message: 'Referral saved successfully', referral: newReferral });
  } catch (error) {
    console.error('Error saving referral:', error);
    res.status(500).json({ error: 'Database error' });
  }
};

module.exports = { createReferral };
