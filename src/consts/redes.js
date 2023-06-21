const informacoes = {
  WHATSAPP: "5551989585388",
  INSTAGRAM: "hzanetty",
  FACEBOOK: "",
};

const redes = {
  WHATSAPP: `https://api.whatsapp.com/send?phone=${informacoes.WHATSAPP}`,
  INSTAGRAM: `https://www.instagram.com/${informacoes.INSTAGRAM}`,
  FACEBOOK: `https://www.facebook.com/${informacoes.FACEBOOK}`,
};

export default redes;
