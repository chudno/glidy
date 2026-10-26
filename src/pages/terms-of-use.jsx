import { Head } from 'minista'
import MerchantTerms from "@/components/MerchantTerms/MerchantTerms.jsx";

export const metadata = {
    title: 'Merchant Terms & Conditions',
}

export default function () {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://glidy.pro/terms-of-use" />
            </Head>
            <div className="main-wrapper">
                <MerchantTerms />
            </div>
        </>
    )
}
