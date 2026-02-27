import { NextRequest, NextResponse } from 'next/server';

interface FeedbackPayload {
  message: string;
  rating: number;
  userId?: string;
}

// POST /api/feedback
// Body: { message: string; rating: number; userId?: string }
// Submits user feedback.
// TODO (Phase 3): insert into Supabase.
export async function POST(request: NextRequest) {
  const body: FeedbackPayload = await request.json();
  const { message, rating, userId } = body;

  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'rating must be a number between 1 and 5' }, { status: 400 });
  }

  // Placeholder — replace with Supabase insert in Phase 3.
  return NextResponse.json({ success: true, message, rating, userId }, { status: 201 });
}
