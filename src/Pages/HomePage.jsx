import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import BlogList from '../Component/BlogList';
import { postNewest } from '../APIRequest/APIRequest.js';
import Loader from '../Component/Loader.jsx';

const HomePage = () => {

    let [list, setList] = useState(null);

    useEffect(() => {

        (async () => {
            let res = await postNewest();
            setList(res);
        })()

    }, [])

    return (
        <Layout>
            {list === null ? <Loader /> : <BlogList list={list} />}
        </Layout>
    );
};

export default HomePage;