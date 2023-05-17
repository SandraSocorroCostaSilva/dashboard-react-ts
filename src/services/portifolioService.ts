import api from "./api";

export interface Portifolio {   
    id: number;
    link: string;
    image: string;
    title: string;
}

export const createPortifolio = async (portifolio: Portifolio)  => {
    const response = await api.post("/portifolio", portifolio);
    return response.data;
    
};

export const getPortifolio = async ()  => {
    const response = await api.get("/portifolio");
    return response.data;
    
};

export const getPortifolioById = async (id:number) => {
    const response = await api.get(`/portifolio/${id}`);
    return response.data;
    
};

export const updatePortifolio = async (portifolio: Portifolio) => {
    const response = await api.put(`/portifolio/${portifolio.id}`, portifolio);
    return response.data;
    
};

export const deletePortifolio = async (id:number)  => {
    const response = await api.delete(`/portifolio/${id}`);
    return response.data;
    
};

export const createOrUpdatePortifolio = async (portifolio: Portifolio) => {
    if (portifolio.id === 0) {
        return await createPortifolio(portifolio);
    } else {
        return await updatePortifolio(portifolio);
    } 
    
};