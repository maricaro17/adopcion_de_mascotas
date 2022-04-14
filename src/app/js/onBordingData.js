import adopcion from "../../public/svg/esperando adopción.svg";
import adoptado from "../../public/svg/Adoptado.svg";
export const onBordingData = () => {
  return [
    {
      page: 1,
      info: {
        title: "Encuentra tu amigo fiel",
        description: `
            Cuando adoptas a una mascota, cosas maravillosas suceden en tu
            vida. Si estás pensando en tener un nuevo integrante en tu
            familia; ¡estás en el lugar correcto!`,
        image: adopcion,
      },
    },
    {
      page: 2,
      info: {
        title: "Crea una nueva historia",
        description:`
            Adoptar puede ser una de las experiencias más grandiosas de tu
            vida, donde compartirás bellos momentos con estos amiguitos
            fieles, tiernos y llenos de amor para regalar.
        `,
        image: adoptado,
      },
    },
  ];
};
