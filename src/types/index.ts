import { Dispatch, SetStateAction } from "react"

export type NewsProps = {
    author: string
    excerpt: string
    published_date: string
    rights: string
    title: string
    url: string
    media: string
    _id: number
}

export type NewslistProps = {
    articles: []
    totalResults: number
}

// No longer needed
// export type DispatchProps = {
//     setNews: Dispatch<SetStateAction<NewslistProps | undefined>>;
// }

