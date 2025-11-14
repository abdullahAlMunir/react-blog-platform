import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../APIRequest/APIRequest.js';
import BlogList from '../Component/BlogList';
import Loader from '../Component/Loader.jsx';

const ByCategoryPage = () => {

    let { categoryID } = useParams();
    let [list, setList] = useState([]);

    useEffect(() => {

        (async () => {
            let res = await postByCategory(categoryID);
            setList(res);
        })()

    }, [categoryID])

    return (
        <Layout>
            {list === null ? <Loader /> : <BlogList list={list} />}
        </Layout>
    );
};

export default ByCategoryPage;