import {CredentialsSignIn, DemoSignIn, OrSeperator, ProvidersSignIn} from "@/app/(components)/auth/footer"

const CardFooter = () => {
  return (
  <div className="w-full px-[18px] py-12 bg-darkBlack lgMobile:px-20">
    <ProvidersSignIn/>
    <OrSeperator/>
    <CredentialsSignIn/>
    <DemoSignIn/>
  </div>)
}

export default CardFooter