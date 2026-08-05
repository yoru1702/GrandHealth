import { createClient } from "@/lib/supabase/server";

export default async function TestPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
  .from("tb_hospital")
  .select("*");

  if (error) {
    return (
      <div style={{ padding: 20 }}>
        <h2>❌ Error</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>✅ Connected to Supabase</h1>

      <p>จำนวนข้อมูล: {data?.length}</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}