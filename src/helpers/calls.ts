import { Sources } from "./enums";

export const getNewsList = async (source: Sources) => {
    // main key
    // const res = await fetch(
    //   `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&country=us`
    // )

    // alt key
    console.log(source)
    if (source === Sources.DEFAULT) {
        console.log("NONE");
        const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_ALT_KEY}&pageSize=25`
        )

        const data = await res.json()
        // const newsData = data.articles
        if (!data) return
        return data
    } else {
        console.log("PARAMS FOUND");
        const res = await fetch(
            `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.REACT_APP_ALT_KEY}&pageSize=25`
        )

        const data = await res.json()
        // const newsData = data.articles
        if (!data) return
        return data
    }
}