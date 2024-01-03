import {getProviders, getCsrfToken} from "next-auth/react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { options } from "@/app/api/auth/[...nextauth]/options"
import {CredentialsSignIn, DemoSignIn, OrSeperator, ProvidersSignIn} from "@/app/(components)/auth/footer"

const CardFooter = async () => {
  const providers = await getProviders(options)
  const session = await getServerSession()
  const csrfToken = await getCsrfToken();
  //
  if (session){
    redirect("/")
  }
  //
  return (
  <div className="w-full px-[18px] py-12 bg-darkBlack lgMobile:px-20">
    <ProvidersSignIn providers={providers} />
    <OrSeperator/>
    <CredentialsSignIn csrfToken={csrfToken} />
    <DemoSignIn/>
  </div>)
}

export default CardFooter