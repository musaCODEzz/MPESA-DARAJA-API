




document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    //const Payment = require('./models/paymentModel');

    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;
    console.log({phone, amount});

    axios.post("https://silent-mouse-67.telebit.io/stkPush",
                        {phone, amount
                        }).then((data) => {
                            console.log(data.data);
                            //res.status(200).json(data.data);
                            // saving th data to the database
                            const payment = new Payment({
                                number: phone,
                                amount: amount,
                                trnx_id: data.data.TrxId,
                                timestamp: data.data.Timestamp,
                                
                            });

                            payment.save().then((data) => {
                                console.log(data);
                                //res.status(200).json({message: "Payment successful", data});
                            }
                            ).catch((error) => {
                                console.log(error);
                                //res.status(400).json(error.message);
                            }
                            );
                            
                        }).catch((error) => {
                            console.log(error);
                            //res.status(400).json(error.message);
                        });








});