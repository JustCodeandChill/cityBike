import axios from 'axios'; 

export const getNetworkData = async () => {
    const data = await axios.get('http://api.citybik.es/v2/networks');
    return data.data.networks;
}
