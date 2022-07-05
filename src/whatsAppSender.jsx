import {useState} from "react";

export function WhatsAppSender() {
    /**
     * Optional links:
     *
     * http://wa.me/972972547477637
     https://api.whatsapp.com/send/?phone=972547477637&text&app_absent=0

     */
    const [phoneNumber, setPhoneNumber] = useState("");

    return (

        <div>
            <p>Put here your number, and send </p>

            <input type="text" value={phoneNumber}
                   onChange={
                       (ev) => {
                           setPhoneNumber(ev.target.value);
                       }
                   }
                   placeholder= "Type only numbers"
            />
            <div>
                <a
                    className="send-button"
                    href={`https://wa.me/${phoneNumber} `}
                    target="_blank">Send </a>
            </div>
        </div>
    );
}