import React,{ useEffect, useState } from 'react';
import Sawo from "sawo";

function Sawolog(){
    const [userPayload, setUserPayload,] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    name: "Sawo",
    data= () => ({
        isLoggedIn: false,
        userPayload: {},
        Sawo: null,
      }),

    useEffect(()=>{
        const sawoConfig = {
            // should be same as the id of the container
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "phone_number_sms",
            // Add the API key
            apiKey: "4220bc91-b003-4f1f-bd36-37633f8c8d5d",
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
              this.userPayload = payload;
              this.isLoggedIn = true;
            },
    };
    let Sawo = new Sawo(sawoConfig);
    Sawo.showForm();
} );
return(
<div className="container">
<section>
      <h1>VUE | Sawo Form Example {{ isLoggedIn }}</h1>
      <div class="loggedin" v-if="isLoggedIn">
        <h2>User Successfull login</h2>
        <div>UserId: {{ userPayload.user_id }}</div>
        <div>Verification Token: {{ userPayload.verification_token }}</div>
      </div>
      <div class="formContainer" id="sawo-container" v-if="!isLoggedIn">
        {/* <!-- Sawo form will populate here --> */}
      </div>
    </section>
</div>
);
}
export default Sawolog;