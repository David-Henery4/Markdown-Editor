import { CardFooter, CardHeader } from "@/app/(components)/auth" 

const page = () => {
  return (
    // Will need on bigger screens: grid place-items-center (on "section")
    // & min-h-[100svh] (on "main")
    <main className=" w-full text-center">
      <section className="w-full max-w-lg mx-auto overflow-hidden">
        <CardHeader />
        <CardFooter />
      </section>
    </main>
  );
}

export default page