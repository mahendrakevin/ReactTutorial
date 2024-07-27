import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
    const pageSize = 10;
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage
    } = usePosts({pageSize});

    if (isLoading) return <div className='spinner-grow'></div>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <ul className="list-group">
                {data?.pages.map(page => <React.Fragment>
                    {page.map(post => (
                        <li key={post.id} className="list-group-item">
                            {post.title}
                        </li>
                    ))}
                </React.Fragment>)}
            </ul>
            {/*<button onClick={() => setPage(page - 1)}*/}
            {/*        disabled={page === 1}*/}
            {/*        className='btn btn-primary my-3'>Previous*/}
            {/*</button>*/}
            {/*<button onClick={() => setPage(page + 1)}*/}
            {/*        className='btn btn-primary my-3 ms-1'>Next*/}
            {/*</button>*/}
            <button onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className='btn btn-primary my-3 ms-1'>
                {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </button>
        </>
    );
};

export default PostList;
