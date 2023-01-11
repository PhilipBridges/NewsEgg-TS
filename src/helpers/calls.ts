import { Sources } from "./enums";

export const getNewsList = async (source: Sources) => {
    if (source === Sources.DEFAULT) {
        const res = await fetch(
            `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_API_KEY}&locale=us&categories=politics,tech,business,science`,
        )

        const data = await res.json()
        if (!data) return
        return data
    } else {
        const res = await fetch(
            `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_API_KEY}&locale=us&domains=${source}`
        )

        const data = await res.json()
        if (!data) return
        return data
    }
}