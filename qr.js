var qrData = document.getElementById("dataInput");
var qrImage = document.getElementById("imageInput");
var qrColor = document.getElementById("colorInput");
var qrType = document.getElementById("typeInput");

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Masukan Link",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square",
  },
});

const updateQrData = () => {
  var newQrData = qrData.value;
  qrCode.update({
    data: newQrData,
  });
};

const updateQrImg = () => {
  var newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage,
  });
};

const updateQrColor = () => {
  var newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor,
    },
  });
};

const updateQrType = () => {
  var newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType,
    },
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById("canvas"));
