import api from "./api";

export interface Portifolio {   
    id: number;
    link: string;
    image: string;
    title: string;
}

export const createPortifolio = async (portifolio: Portifolio)  => {
    const response = await api.post("/portfolio", portifolio);
    return response.data;
    
};

export const getPortifolio = async ()  => {
    const response = await api.get("/portfolio");
    return response.data;
    
};

export const getPortifolioById = async (id:number) => {
    const response = await api.get(`/portfolio/${id}`);
    return response.data;
    
};

export const updatePortifolio = async (portifolio: Portifolio) => {
    const response = await api.put(`/portfolio/${portifolio.id}`, portifolio);
    return response.data;
    
};

export const deletePortifolio = async (id:number)  => {
    const response = await api.delete(`/portfolio/${id}`);
    return response.data;
    
};

export const createOrUpdatePortifolio = async (portifolio: Portifolio) => {
    if (portifolio.id === 0) {
        return await createPortifolio(portifolio);
    } else {
        return await updatePortifolio(portifolio);
    } 
    
};