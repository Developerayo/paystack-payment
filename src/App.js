import React, { Component } from 'react';
import PaystackButton from 'react-paystack';

import  secure from './img/secured-by-paystack.png';
import './style.css';

   class App extends Component {
 
      state = {
        key: "pk_live_0c5b29b86d50a95c3d721c9e2e7e4f0aff7640dc",
        email: "shodipovi@gmail.com",
        amount: 10000
      }
 
      callback = (response) => {
        alert('success. transaction ref is ' + response.reference);
      }
 
      close = () => {
        console.log("Payment closed");
      }
 
      getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
 
        for( let i=0; i < 15; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
 
        return text;
      }
 
      render() {
        return (
          <div class="body">
            <p>
              <PaystackButton
                class="paystack_payment_button"
                text=<span>Make Payment</span>
                callback={this.callback}
                close={this.close}
                disabled={false}
                embed={false}
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                paystackkey={this.state.key}
                tag="button"
              />
            </p>
            <div className="secure">
            <img className="secure" src={secure} alt="secured-by-paystack"/>
            </div>
          </div>
        );
      }
    }
 
    export default App;
