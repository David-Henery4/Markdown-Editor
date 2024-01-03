import { CardFooter, CardHeader } from "@/app/(components)/auth" 

const page = () => {
  return (
    <main className="bg-veryDarkBlack w-full text-center lgMobile:min-h-[100svh] lgMobile:py-10 lgMobile:grid lgMobile:place-items-center">
      <section className="w-full max-w-lg mx-auto overflow-hidden lgMobile:rounded-xl">
        <CardHeader />
        <CardFooter />
      </section>
    </main>
  );
}

export default page