import React, { useState, useEffect } from 'react'

function Search() {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState('')
    const [finalData, setfinalData] = useState([])
    const [searchId, setsearchId] = useState('')

    const fetchData = async (id) => {
        try {

            const data = await fetch(id ? `https://jsonplaceholder.typicode.com/todos/${id}` : 'https://jsonplaceholder.typicode.com/todos')
            const resp = await data.json()
            if (Array.isArray(resp)) {

                setdata(resp)
            } else {
                setdata([resp])
            }
        } catch (error) {
            setdata([])
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        let timer = setTimeout(() => {
            fetchData(searchId)
        }, 1000);

        return () => clearTimeout(timer)
    }, [searchId])

    useEffect(() => {
        let timer = setTimeout(() => {
            let filtered = data?.filter(i => {
                return i.title.includes(search)
            })

            setfinalData(filtered)

        }, 1000);

        return () => clearTimeout(timer)
    }, [search, data])

    return (
        <div>
            <label name="search">Search</label>
            <input value={search} onChange={(e) => setsearch(e.target.value)} name='search' />
            <input type='number' value={searchId} onChange={(e) => setsearchId(e.target.value)} />
            <table>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Is Completed</th>
                </thead>
                <tbody>
                    {finalData.map(i => {
                        return <tr key={i.id}>
                            <td>{i.userId}</td>
                            <td>{i.title}</td>
                            <td>{i.completed ? "True" : "False"}</td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Search