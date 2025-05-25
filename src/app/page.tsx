import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div style={{ padding: 20 }}>
            {/* <h1>Interview Challenges</h1>
            <ul>
              <li><Link href="/calculator">Calculator</Link></li>
              <li><Link href="/navbar">Navbar</Link></li>
              <li><Link href="/twosum">Two Sum</Link></li>
            </ul> */}
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        </footer>
      </div>
    </Layout>
  );
}
