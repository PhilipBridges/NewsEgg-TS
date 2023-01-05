import { Sources } from "./enums";

export const getNewsList = async (source: Sources) => {
    // main key
    // const res = await fetch(
    //   `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=us`
    // )

    // alt key
    if (source === Sources.DEFAULT) {
        const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_ALT_KEY}&pageSize=25`
        )

        const data = await res.json()
        if (!data) return
        return data
    } else {
        const res = await fetch(
            `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.REACT_APP_ALT_KEY}&pageSize=25`
        )

        const data = await res.json()
        if (!data) return
        return data
    }
}