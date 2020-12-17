import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useLiff } from 'react-liff';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }, dispatch]= useStateValue();
    const { error, liff, isLoggedIn, ready } = useLiff();
    
    function countUnique(arr) {
        let counts = {};
        arr.forEach((el) => counts[el.title] = 1  + (counts[el.title] || 0))
        return counts;
    }

    var printObj = function(obj) { 
        var string = ''; 

        for(var prop in obj) { 
            string+= prop + ': ' + obj[prop]+'\n'; 
        } 

        return string; 
    } 
      

    const processToOrder = () => {
        if(!basket.length > 0) {
            alert('keranjang kosong, silahkan pilih dulu terima kasih!');
            return history.push('/');
        }
        if(!isLoggedIn) return alert('silahkan login terlebih dahulu!');
        if (!liff.isInClient()) {
            console.log('Currently you are in eksternal browser');
            dispatch({
                type:"ORDERED_FROM_BASKET",
                item:null
            })
            alert('terima kasih! order kakak akan segera di proses!');
            return history.push('/');
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': `Hai ${user.displayName}, \n\nTerima kasih telah memesan makanan, berikut adalah detail pesananannya: \n\n${printObj(countUnique(basket))} \n\npesanan kakak akan segera di proses dan akan diberitahu jika sudah bisa diambil,\n\nMohon di tunggu ya!`
            }]).then(function() {
                dispatch({
                    type:"ORDERED_FROM_BASKET",
                    item:null
                })
                alert('terima kasih! order kakak akan segera di proses!');
                return history.push('/');
            }).catch(function(error) {
                window.alert('Error sending message: ' + error);
            });
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp."}
            />
            <button onClick={processToOrder}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
