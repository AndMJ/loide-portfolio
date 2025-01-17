import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 font-[family-name:var(--font-geist-mono)] justify-items-center items-center min-h-screen ">
        <main className="card rounded-2xl flex flex-col gap-8 p-10">
            <div className={"text-7xl"}>
                <div className="mb-5">
                    <Image
                        className=""
                        src="/blossom-flower.svg"
                        alt="Blossom flower"
                        width={72}
                        height={72}
                    />
                </div>
                <h2>Loide Pernas</h2>
            </div>

            <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">Under construction..</li>
            </ol>

            <div className={"mx-auto opacity-80"}>
                <img className="rounded-2xl" src="/hero-image.jpg" width={458} alt="Blossom flower"/>
            </div>


            {/*<div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </div>*/}
        </main>
        <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center font-[family-name:var(--font-geist-mono)]">
            &copy; {new Date().getFullYear()} · Made by<a className="hover:underline hover:underline-offset-4" href="https://github.com/AndMJ" target="_blank" rel="noopener noreferrer">André João</a>
        </footer>
    </div>
  );
}
