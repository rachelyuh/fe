import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Login() {
    const password = 1121
    const firstName = "pikachu"
    const lastName = "bob"
    const email = "momdaodjs"

   
    const { data, error, isLoading, isValidating } = useSWR(`/api/user/login/${email}?password=${password}`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { experience } = data

    return (
        <>
        
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>email: {email}</h2>
            <h2>password: {password}</h2>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    <h2> { experience } </h2>
                </>
            )}
            
        </>
    )
}