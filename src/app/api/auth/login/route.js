import { supabase } from "@/lib/db";

export async function POST(request) {
    const { username, password } = await request.json();

    const { data, error } = await supabase.auth.signInWithPassword({
        username,
        password,
    });

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 401 });
    }

    return new Response(JSON.stringify({ user: data.user }), { status: 200 });
}