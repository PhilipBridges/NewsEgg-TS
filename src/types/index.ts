import { Dispatch, SetStateAction } from "react"

export type NewsProps = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: { id: string | null; name: string }
    title: string
    url: string
    urlToImage: string
}

export type NewslistProps = {
    articles: []
    totalResults: number
}

export type DispatchProps = {
    setNews: Dispatch<SetStateAction<NewslistProps | undefined>>;
}