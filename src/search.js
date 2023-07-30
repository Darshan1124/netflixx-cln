import React, { useState } from 'react'
import './search.css'
import { MDBContainer } from "mdb-react-ui-kit";

function Search() {
    return (
        <>
            <div class="search-container">
                <form action="/search" method="get">
                    <input class="search" id="searchleft" type="search" name="q" placeholder="Search"/>
                    <label class="button searchbutton" for="searchleft"><span class="mglass">&#9906;</span></label>
                </form>
            </div>
        </>
    )
}

export default Search
