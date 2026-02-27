import { NextRequest, NextResponse } from 'next/server';
import { SavedSetup } from '@/types';

// GET /api/setups?userId=<userId>
// Returns all setups for a user.
// TODO (Phase 3): query Supabase by userId.
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'userId query param is required' }, { status: 400 });
  }

  // Placeholder — replace with Supabase fetch in Phase 3.
  const setups: SavedSetup[] = [];
  return NextResponse.json(setups);
}

// POST /api/setups
// Body: SavedSetup & { userId: string }
// Saves a new setup for the given user.
// TODO (Phase 3): insert into Supabase.
export async function POST(request: NextRequest) {
  const body: SavedSetup & { userId: string } = await request.json();
  const { userId, ...setup } = body;

  if (!userId || !setup.id) {
    return NextResponse.json({ error: 'userId and setup id are required' }, { status: 400 });
  }

  // Placeholder — replace with Supabase insert in Phase 3.
  return NextResponse.json(setup, { status: 201 });
}

// PUT /api/setups?id=<id>
// Body: Partial<Pick<SavedSetup, 'rating' | 'feedback'>>
// Updates rating/feedback for an existing setup.
// TODO (Phase 3): update row in Supabase.
export async function PUT(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'id query param is required' }, { status: 400 });
  }

  const body: Partial<Pick<SavedSetup, 'rating' | 'feedback'>> = await request.json();

  // Placeholder — replace with Supabase update in Phase 3.
  return NextResponse.json({ id, ...body });
}

// DELETE /api/setups?id=<id>
// Deletes a setup by id.
// TODO (Phase 3): delete row from Supabase.
export async function DELETE(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'id query param is required' }, { status: 400 });
  }

  // Placeholder — replace with Supabase delete in Phase 3.
  return NextResponse.json({ success: true, id });
}
