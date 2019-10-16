export const Combo = {

  duasCamisas: { 
    id: 1, 
    mountBodyData: (camisa1, camisa2) => ({
      first_camisa_id: camisa1.id,
      second_camisa_id: camisa2.id,
    })
  },

  doisBottons: { 
    id: 2,
    mountBodyData: (botton1, botton2) => ({
      first_botton_id: botton1.id,
      second_botton_id: botton2.id,
    })
  },

  tresBottons: { 
    id: 3, 
    mountBodyData: (botton1, botton2, botton3) => ({
      first_botton_id: botton1.id,
      second_botton_id: botton2.id,
      third_botton_id: botton3.id,
    })
  },

  doisCadernos: { 
    id: 4, 
    mountBodyData: (caderno1, caderno2) => ({
      first_caderno_id: caderno1.id,
      second_caderno_id: caderno2.id
    })
  },
}
