import connectDb from '@/db/connectDb';
import Payment from '@/models/Payment';


export async function GET(req, res) {
  try {
    await connectDb(); // Connect to MongoDB

    const payments = await Payment.find(); // Get all payment documents
    return new Response(JSON.stringify(payments), { status: 200 });
  } catch (error) {
    console.error('Error fetching payments:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}


export async function POST(req, res) {
  try {
    await connectDb();

    const body = await req.json(); // Parse JSON body (req.json for Next.js API routes)
    const { name, message, amount } = body;

    // Create a new payment document
    const newPayment = new Payment({
      name,
      message,
      amount,
    });

    // Save the new payment to the database
    await newPayment.save();

    return new Response(JSON.stringify({ message: 'Payment conducted successfully' }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating payment:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
