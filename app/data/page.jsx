import { neon } from '@neondatabase/serverless'

export default async function Data() {
  async function getData() {
    const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL)
    const response = await sql`SELECT * FROM product_view`
    return response
  }

  let data = await getData()
  const jsonData = JSON.stringify(data, null, 2)

  return <div className="">{jsonData}</div>
}
