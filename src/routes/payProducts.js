const { mercadopago } = require("../mercadopago.js");

const payProducts = async (req,res) => {
  const { suma , titulo } = req.body
  const total = parseInt(suma)
  let adress = "Calle falsa 1010";
  let phone = 1103882934
  let productos = [{
    id: 1,
    picture_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fcompras-internet&psig=AOvVaw2rkKOCzvSUgPlLrNW57Kf1&ust=1669431218487000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjLlYiqyPsCFQAAAAAdAAAAABAD",
    title: titulo,
    unit_price: total,
    quantity: 1
  }]
  let preference = {
    transaction_amount: parseInt(total * 1.15),
    net_amount: parseInt(total * 1.15) * 0.968 - 800,
    taxes: [
      {
        type: "IVA",
        value: parseInt(total * 1.15) - parseInt(total * 1.15) * 0.968 - 800,
      },
    ],
    binary_mode: true,
    payer: {
      name: "Ricardo",
      surname: "Geronimo",
      email: "fake.test@gmail",
      adress: { adress },
      phone: { phone },
    },
    shipment: {
      receiver_adress: {
        zip_code: 1629,
        street_number: 2233,
        street_name: "Direcione",
        floor: 10,
        apartment: 13,
      },
    },
    additional_info: "Mail@gmail.com",
    items: productos,

    back_urls: {
      //definir las verdaderas aca
      success: "https://tupcideal.vercel.app/",
      failure: "https://tupcideal.vercel.app/",
      pending: "https://tupcideal.vercel.app/",
    },
    //auto_return: "approved"

  };

  mercadopago.preferences
    .create(preference)
    //le pasamos las preference que definimos de linea 35 a 72
    .then(function (response) {
      res.send(
        response.body.init_point

        //este id es el id de la compra, que mandamos al front para que reenvie a MercadoPago
      );
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = payProducts;
