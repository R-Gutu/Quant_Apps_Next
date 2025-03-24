
import { domAnimation, LazyMotion } from "motion/react"
import { PropsWithChildren } from "react"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function Providers({children} : PropsWithChildren<unknown>){
  const messages = await getMessages();
  return (
    <LazyMotion features={domAnimation}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LazyMotion>
  )
}
