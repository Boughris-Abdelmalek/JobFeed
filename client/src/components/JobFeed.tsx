import React, {FC, useEffect, useState} from 'react';
import styles from './JobFeed.module.css';
import {BASE_URL} from "../constants/common";
import {useFetch} from "../hooks/useFetch";
import {dateToString} from "../utils/dateToString";
import {debounce} from "../utils/debounce";

type JobPostType = {
    id: number;
    title: string;
    time: string;
    by: string;
};

const JobCard: FC<{ postId: number }> = ({ postId }) => {
    const { data, error, isLoading } = useFetch<JobPostType>(
        `${BASE_URL}/item/${postId}.json`
    );

    if (isLoading) {
        return <h1>...Loading</h1>;
    }

    if (error) {
        console.log(error);
    }

    return (
        data && (
            <div className={styles.JobCardContainer}>
                <p>ID: <span>{data.id}</span></p>
                <div>
                    <h3>Title: {data.title}</h3>
                    <h5>Date: {dateToString(data.time)}</h5>
                </div>
                <p>Posted by: <span>{data.by}</span></p>
            </div>
        )
    );
};

const JobFeed = () => {
    const { data, error, isLoading } = useFetch<Array<JobPostType['id']>>(
        `${BASE_URL}/jobstories.json`
    );

    const [pagination, setPagination] = useState<number>(6)
    const [page, setPage] = useState<Array<number>>([])

    useEffect(() => {
        if (data) {
            setPage(data.slice(0, pagination));
        }

        const handleScroll = () => {
            if (((window.innerHeight + window.scrollY) >= window.document.body.offsetHeight)) {
                setPagination((prevPagination) => prevPagination + 5)
            }
        };

        const debounceHandleScroll = debounce(handleScroll)
        window.addEventListener('scroll', debounceHandleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', debounceHandleScroll);
        };
    }, [data, pagination]);

    if (isLoading) {
        return <h1>...Loading</h1>;
    }

    if (error) {
        console.log(error);
        return <h1>Something wrong happened, try again later</h1>;
    }

    return (
        <div className={styles.container} >
            <h1 className={styles.header}>Hackernews Jobs</h1>
            <div className={styles.jobFeedContainer}>
            {page &&
                page.map((postId: number) => {
                    return <JobCard postId={postId} key={postId} />;
                })}
            </div>
        </div>
    );
};

export default JobFeed;
