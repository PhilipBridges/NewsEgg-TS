import { Sources } from "./enums";

export const getNewsList = async (source: Sources) => {
    const API_KEY = process.env.REACT_APP_API_KEY || ""

    // alt key
    if (source === Sources.DEFAULT) {
        const res = await fetch(
            `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=15&not_sources=wacotrib.com`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY
            }
        }
        )

        const data = await res.json()
        console.log("DADA", data)
        if (!data || data.error_code) return
        return data
    } else {
        const res = await fetch(
            `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "localhost",
                "X-API-KEY": API_KEY
            }
        }
        )

        const data = await res.json()
        if (!data || data.error_code) return
        return data
    }
}