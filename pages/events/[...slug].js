import React from 'react'
import { useRouter } from "next/router";

const FilteredEventsPage = () => {

    const router = useRouter()
    const filterData = router.query.slug
    console.log(router.query.slug)
    return (
        <div>
            <h1>Filtered Events Page</h1>
        </div>
    )
}

export default FilteredEventsPage
