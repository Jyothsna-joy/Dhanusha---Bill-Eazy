import GooglePayButton from "@google-pay/button-react";
import './pay.css';
import {motion} from "framer-motion";
import { useState } from "react";
import Sidebar1 from "../sidebar/Sidebar1";
import Navbar from "../navbar/Navbar";
export default function Pay(){
    const [move, setMove]= useState(false);
    return(
        <div className="home">
        <Sidebar1 />
       
          <div className="animation-class">
<motion.div className="animation" 
animate={{ rotate: [0,500,500,0],x:[200,400,400,200] }}
transition={{repeat:Infinity,duration:1.5}}
onClick={()=>{
    setMove(!move);
}} >
                </motion.div>
                <div>
                    <br/><br/>
                     <GooglePayButton className="gpay"
environment="TEST"
paymentRequest={{
apiVersion: 2,
apiVersionMinor: 0,
allowedPaymentMethods: [
{
  type: 'CARD',
  parameters: {
    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    allowedCardNetworks: ['MASTERCARD', 'VISA'],
  },
  tokenizationSpecification: {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      gateway: 'example',
      gatewayMerchantId: 'exampleGatewayMerchantId',
    },
  },
},
],
merchantInfo: {
merchantId: '12345678901234567890',
merchantName: 'Demo Merchant',
},
transactionInfo: {
totalPriceStatus: 'FINAL',
totalPriceLabel: 'Total',
totalPrice: '1',
currencyCode: 'USD',
countryCode: 'US',
},
shippingAddressRequired: true,
callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
}}
onLoadPaymentData={paymentRequest => {
console.log('Success', paymentRequest);
}}
onPaymentAuthorized={paymentData => {
console.log('Payment Authorised Success', paymentData)
return { transactionState: 'SUCCESS'}
}
}
onPaymentDataChanged={paymentData => {
console.log('On Payment Data Changed', paymentData)
return { }
}
}
existingPaymentMethodRequired='false'
buttonColor='white'
buttonType='pay'
/>


                </div>

</div>


          </div>
         
       
          );
}
