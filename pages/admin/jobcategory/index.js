import JobCategorpy from "../../../src/components/admin/JobCategory";

const index = () => {
    return (
        <>
            <JobCategorpy></JobCategorpy>
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})